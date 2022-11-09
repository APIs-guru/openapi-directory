import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEOBJECTSTORAGESSL_SERVERS = [
	"https://api.linode.com/v4",
];



export class CreateObjectStorageSslPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class CreateObjectStorageSslSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateObjectStorageSslSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateObjectStorageSslSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateObjectStorageSslSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateObjectStorageSslSecurityOption2;
}


export class CreateObjectStorageSslRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateObjectStorageSslPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.ObjectStorageSsl;

  @Metadata()
  security: CreateObjectStorageSslSecurity;
}


export class CreateObjectStorageSslDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateObjectStorageSslResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  objectStorageSslResponse?: shared.ObjectStorageSslResponse;

  @Metadata()
  statusCode: number;

  @Metadata()
  createObjectStorageSslDefaultApplicationJsonObject?: CreateObjectStorageSslDefaultApplicationJson;
}
