import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETOBJECTSTORAGESSL_SERVERS = [
	"https://api.linode.com/v4",
];



export class GetObjectStorageSslPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class GetObjectStorageSslSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetObjectStorageSslSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetObjectStorageSslSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetObjectStorageSslSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetObjectStorageSslSecurityOption2;
}


export class GetObjectStorageSslRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: GetObjectStorageSslPathParams;

  @Metadata()
  security: GetObjectStorageSslSecurity;
}


export class GetObjectStorageSslDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetObjectStorageSslResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  objectStorageSslResponse?: shared.ObjectStorageSslResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  getObjectStorageSslDefaultApplicationJsonObject?: GetObjectStorageSslDefaultApplicationJson;
}
