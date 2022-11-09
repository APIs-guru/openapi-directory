import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEOBJECTSTORAGEBUCKETACCESS_SERVERS = [
	"https://api.linode.com/v4",
];



export class UpdateObjectStorageBucketAccessPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class UpdateObjectStorageBucketAccessSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateObjectStorageBucketAccessSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateObjectStorageBucketAccessSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateObjectStorageBucketAccessSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateObjectStorageBucketAccessSecurityOption2;
}


export class UpdateObjectStorageBucketAccessRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateObjectStorageBucketAccessPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: UpdateObjectStorageBucketAccessSecurity;
}


export class UpdateObjectStorageBucketAccessDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateObjectStorageBucketAccessResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateObjectStorageBucketAccess200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  updateObjectStorageBucketAccessDefaultApplicationJsonObject?: UpdateObjectStorageBucketAccessDefaultApplicationJson;
}
