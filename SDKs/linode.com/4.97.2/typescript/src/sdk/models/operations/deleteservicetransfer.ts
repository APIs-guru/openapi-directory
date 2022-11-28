import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteServiceTransferPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class DeleteServiceTransferSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteServiceTransferDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteServiceTransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteServiceTransferPathParams;

  @SpeakeasyMetadata()
  security: DeleteServiceTransferSecurity;
}


export class DeleteServiceTransferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteServiceTransfer200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteServiceTransferDefaultApplicationJsonObject?: DeleteServiceTransferDefaultApplicationJson;
}
