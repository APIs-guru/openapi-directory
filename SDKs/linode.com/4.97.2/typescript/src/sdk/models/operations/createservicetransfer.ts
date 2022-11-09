import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateServiceTransferRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=entities" })
  entities: shared.Entities;
}


export class CreateServiceTransferSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateServiceTransferSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateServiceTransferSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateServiceTransferSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateServiceTransferSecurityOption2;
}


export class CreateServiceTransferRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateServiceTransferRequestBody;

  @Metadata()
  security: CreateServiceTransferSecurity;
}


export class CreateServiceTransferDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateServiceTransferResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  serviceTransfer?: shared.ServiceTransfer;

  @Metadata()
  statusCode: number;

  @Metadata()
  createServiceTransferDefaultApplicationJsonObject?: CreateServiceTransferDefaultApplicationJson;
}
