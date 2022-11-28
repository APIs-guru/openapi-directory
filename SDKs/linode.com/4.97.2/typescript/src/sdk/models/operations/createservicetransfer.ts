import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateServiceTransferRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities" })
  entities: shared.Entities;
}


export class CreateServiceTransferSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreateServiceTransferDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateServiceTransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateServiceTransferRequestBody;

  @SpeakeasyMetadata()
  security: CreateServiceTransferSecurity;
}


export class CreateServiceTransferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  serviceTransfer?: shared.ServiceTransfer;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createServiceTransferDefaultApplicationJsonObject?: CreateServiceTransferDefaultApplicationJson;
}
