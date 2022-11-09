import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateEntityTransferRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=entities" })
  entities: shared.Entities;
}


export class CreateEntityTransferSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateEntityTransferSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateEntityTransferSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateEntityTransferSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateEntityTransferSecurityOption2;
}


export class CreateEntityTransferRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateEntityTransferRequestBody;

  @Metadata()
  security: CreateEntityTransferSecurity;
}


export class CreateEntityTransferDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateEntityTransferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  entityTransfer?: shared.EntityTransfer;

  @Metadata()
  statusCode: number;

  @Metadata()
  createEntityTransferDefaultApplicationJsonObject?: CreateEntityTransferDefaultApplicationJson;
}
