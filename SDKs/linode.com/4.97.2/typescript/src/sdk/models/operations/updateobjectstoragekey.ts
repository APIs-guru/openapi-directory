import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEOBJECTSTORAGEKEY_SERVERS = [
	"https://api.linode.com/v4",
];



export class UpdateObjectStorageKeyPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=keyId" })
  keyId: number;
}


export class UpdateObjectStorageKeyRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;
}


export class UpdateObjectStorageKeySecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateObjectStorageKeySecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateObjectStorageKeySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateObjectStorageKeySecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateObjectStorageKeySecurityOption2;
}


export class UpdateObjectStorageKeyRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateObjectStorageKeyPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateObjectStorageKeyRequestBody;

  @Metadata()
  security: UpdateObjectStorageKeySecurity;
}


export class UpdateObjectStorageKeyDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateObjectStorageKeyResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  objectStorageKey?: shared.ObjectStorageKey;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateObjectStorageKeyDefaultApplicationJsonObject?: UpdateObjectStorageKeyDefaultApplicationJson;
}
