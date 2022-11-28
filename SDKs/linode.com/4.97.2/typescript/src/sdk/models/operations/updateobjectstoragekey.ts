import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateObjectStorageKeyServerList = [
	"https://api.linode.com/v4",
] as const;


export class UpdateObjectStorageKeyPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=keyId" })
  keyId: number;
}


export class UpdateObjectStorageKeyRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;
}


export class UpdateObjectStorageKeySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class UpdateObjectStorageKeyDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateObjectStorageKeyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateObjectStorageKeyPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateObjectStorageKeyRequestBody;

  @SpeakeasyMetadata()
  security: UpdateObjectStorageKeySecurity;
}


export class UpdateObjectStorageKeyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  objectStorageKey?: shared.ObjectStorageKey;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateObjectStorageKeyDefaultApplicationJsonObject?: UpdateObjectStorageKeyDefaultApplicationJson;
}
