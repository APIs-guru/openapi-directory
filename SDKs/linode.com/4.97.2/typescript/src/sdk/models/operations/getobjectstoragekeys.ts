import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETOBJECTSTORAGEKEYS_SERVERS = [
	"https://api.linode.com/v4",
];



export class GetObjectStorageKeysSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetObjectStorageKeysSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetObjectStorageKeysSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetObjectStorageKeysSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetObjectStorageKeysSecurityOption2;
}


export class GetObjectStorageKeysRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  security: GetObjectStorageKeysSecurity;
}


export class GetObjectStorageKeys200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ObjectStorageKey })
  data?: shared.ObjectStorageKey[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetObjectStorageKeysDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetObjectStorageKeysResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getObjectStorageKeys200ApplicationJsonObject?: GetObjectStorageKeys200ApplicationJson;

  @Metadata()
  getObjectStorageKeysDefaultApplicationJsonObject?: GetObjectStorageKeysDefaultApplicationJson;
}
