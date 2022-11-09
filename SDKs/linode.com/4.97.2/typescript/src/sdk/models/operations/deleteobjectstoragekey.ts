import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const DELETEOBJECTSTORAGEKEY_SERVERS = [
	"https://api.linode.com/v4",
];



export class DeleteObjectStorageKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=keyId" })
  keyId: number;
}


export class DeleteObjectStorageKeySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteObjectStorageKeySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteObjectStorageKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteObjectStorageKeySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteObjectStorageKeySecurityOption2;
}


export class DeleteObjectStorageKeyRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: DeleteObjectStorageKeyPathParams;

  @Metadata()
  security: DeleteObjectStorageKeySecurity;
}


export class DeleteObjectStorageKeyDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteObjectStorageKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteObjectStorageKey200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteObjectStorageKeyDefaultApplicationJsonObject?: DeleteObjectStorageKeyDefaultApplicationJson;
}
