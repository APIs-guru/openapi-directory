import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateObjectStorageKeysServerList = [
	"https://api.linode.com/v4",
] as const;


export class CreateObjectStorageKeysSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreateObjectStorageKeysDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateObjectStorageKeysRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: shared.ObjectStorageKeyInput;

  @SpeakeasyMetadata()
  security: CreateObjectStorageKeysSecurity;
}


export class CreateObjectStorageKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  objectStorageKey?: shared.ObjectStorageKey;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createObjectStorageKeysDefaultApplicationJsonObject?: CreateObjectStorageKeysDefaultApplicationJson;
}
