import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteEntityTransferPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=token" })
  token: string;
}


export class DeleteEntityTransferSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteEntityTransferDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteEntityTransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteEntityTransferPathParams;

  @SpeakeasyMetadata()
  security: DeleteEntityTransferSecurity;
}


export class DeleteEntityTransferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteEntityTransfer200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteEntityTransferDefaultApplicationJsonObject?: DeleteEntityTransferDefaultApplicationJson;
}
