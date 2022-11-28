import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CancelObjectStorageServerList = [
	"https://api.linode.com/v4",
] as const;


export class CancelObjectStorageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CancelObjectStorageDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CancelObjectStorageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  security: CancelObjectStorageSecurity;
}


export class CancelObjectStorageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  cancelObjectStorage200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  cancelObjectStorageDefaultApplicationJsonObject?: CancelObjectStorageDefaultApplicationJson;
}
