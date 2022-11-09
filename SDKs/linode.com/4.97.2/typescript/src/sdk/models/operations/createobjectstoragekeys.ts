import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEOBJECTSTORAGEKEYS_SERVERS = [
	"https://api.linode.com/v4",
];



export class CreateObjectStorageKeysSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateObjectStorageKeysSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateObjectStorageKeysSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateObjectStorageKeysSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateObjectStorageKeysSecurityOption2;
}


export class CreateObjectStorageKeysRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ObjectStorageKey;

  @Metadata()
  security: CreateObjectStorageKeysSecurity;
}


export class CreateObjectStorageKeysDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateObjectStorageKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  objectStorageKey?: shared.ObjectStorageKey;

  @Metadata()
  statusCode: number;

  @Metadata()
  createObjectStorageKeysDefaultApplicationJsonObject?: CreateObjectStorageKeysDefaultApplicationJson;
}
