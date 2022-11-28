import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEntityTransferPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class GetEntityTransferSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetEntityTransferDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetEntityTransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEntityTransferPathParams;

  @SpeakeasyMetadata()
  security: GetEntityTransferSecurity;
}


export class GetEntityTransferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  entityTransfer?: shared.EntityTransfer;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getEntityTransferDefaultApplicationJsonObject?: GetEntityTransferDefaultApplicationJson;
}
