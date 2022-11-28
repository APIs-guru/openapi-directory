import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const GetObjectStorageTransferServerList = [
	"https://api.linode.com/v4",
] as const;


export class GetObjectStorageTransferSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetObjectStorageTransferDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetObjectStorageTransferRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  security: GetObjectStorageTransferSecurity;
}


export class GetObjectStorageTransferResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getObjectStorageTransfer200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getObjectStorageTransferDefaultApplicationJsonObject?: GetObjectStorageTransferDefaultApplicationJson;
}
