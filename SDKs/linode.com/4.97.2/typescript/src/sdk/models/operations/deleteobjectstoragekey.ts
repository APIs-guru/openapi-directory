import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const DeleteObjectStorageKeyServerList = [
	"https://api.linode.com/v4",
] as const;


export class DeleteObjectStorageKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=keyId" })
  keyId: number;
}


export class DeleteObjectStorageKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class DeleteObjectStorageKeyDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteObjectStorageKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: DeleteObjectStorageKeyPathParams;

  @SpeakeasyMetadata()
  security: DeleteObjectStorageKeySecurity;
}


export class DeleteObjectStorageKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  deleteObjectStorageKey200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  deleteObjectStorageKeyDefaultApplicationJsonObject?: DeleteObjectStorageKeyDefaultApplicationJson;
}
