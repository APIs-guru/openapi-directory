import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const MODIFYOBJECTSTORAGEBUCKETACCESS_SERVERS = [
	"https://api.linode.com/v4",
];



export class ModifyObjectStorageBucketAccessPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class ModifyObjectStorageBucketAccessSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class ModifyObjectStorageBucketAccessSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class ModifyObjectStorageBucketAccessSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ModifyObjectStorageBucketAccessSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ModifyObjectStorageBucketAccessSecurityOption2;
}


export class ModifyObjectStorageBucketAccessRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ModifyObjectStorageBucketAccessPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: ModifyObjectStorageBucketAccessSecurity;
}


export class ModifyObjectStorageBucketAccessDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class ModifyObjectStorageBucketAccessResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  modifyObjectStorageBucketAccess200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  modifyObjectStorageBucketAccessDefaultApplicationJsonObject?: ModifyObjectStorageBucketAccessDefaultApplicationJson;
}
