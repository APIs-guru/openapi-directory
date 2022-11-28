import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateEntityTransferRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities" })
  entities: shared.Entities;
}


export class CreateEntityTransferSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreateEntityTransferDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateEntityTransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateEntityTransferRequestBody;

  @SpeakeasyMetadata()
  security: CreateEntityTransferSecurity;
}


export class CreateEntityTransferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  entityTransfer?: shared.EntityTransfer;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createEntityTransferDefaultApplicationJsonObject?: CreateEntityTransferDefaultApplicationJson;
}
