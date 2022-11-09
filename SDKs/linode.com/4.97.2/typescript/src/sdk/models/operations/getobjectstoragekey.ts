import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETOBJECTSTORAGEKEY_SERVERS = [
	"https://api.linode.com/v4",
];



export class GetObjectStorageKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=keyId" })
  keyId: number;
}


export class GetObjectStorageKeySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetObjectStorageKeySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetObjectStorageKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetObjectStorageKeySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetObjectStorageKeySecurityOption2;
}


export class GetObjectStorageKeyRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: GetObjectStorageKeyPathParams;

  @Metadata()
  security: GetObjectStorageKeySecurity;
}


export class GetObjectStorageKeyDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetObjectStorageKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  objectStorageKey?: shared.ObjectStorageKey;

  @Metadata()
  statusCode: number;

  @Metadata()
  getObjectStorageKeyDefaultApplicationJsonObject?: GetObjectStorageKeyDefaultApplicationJson;
}
