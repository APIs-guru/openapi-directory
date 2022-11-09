import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const DELETEOBJECTSTORAGESSL_SERVERS = [
	"https://api.linode.com/v4",
];



export class DeleteObjectStorageSslPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class DeleteObjectStorageSslSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteObjectStorageSslSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteObjectStorageSslSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteObjectStorageSslSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteObjectStorageSslSecurityOption2;
}


export class DeleteObjectStorageSslRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: DeleteObjectStorageSslPathParams;

  @Metadata()
  security: DeleteObjectStorageSslSecurity;
}


export class DeleteObjectStorageSslDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteObjectStorageSslResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteObjectStorageSsl200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteObjectStorageSslDefaultApplicationJsonObject?: DeleteObjectStorageSslDefaultApplicationJson;
}
