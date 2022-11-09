import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEOBJECTSTORAGEBUCKET_SERVERS = [
	"https://api.linode.com/v4",
];


export enum CreateObjectStorageBucketRequestBodyAclEnum {
    Private = "private"
,    PublicRead = "public-read"
,    AuthenticatedRead = "authenticated-read"
,    PublicReadWrite = "public-read-write"
}


export class CreateObjectStorageBucketRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=acl" })
  acl?: CreateObjectStorageBucketRequestBodyAclEnum;

  @Metadata({ data: "json, name=cluster" })
  cluster: string;

  @Metadata({ data: "json, name=cors_enabled" })
  corsEnabled?: boolean;

  @Metadata({ data: "json, name=label" })
  label: string;
}


export class CreateObjectStorageBucketSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateObjectStorageBucketSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateObjectStorageBucketSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateObjectStorageBucketSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateObjectStorageBucketSecurityOption2;
}


export class CreateObjectStorageBucketRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/json" })
  request?: CreateObjectStorageBucketRequestBody;

  @Metadata()
  security: CreateObjectStorageBucketSecurity;
}


export class CreateObjectStorageBucketDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateObjectStorageBucketResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  objectStorageBucket?: shared.ObjectStorageBucket;

  @Metadata()
  statusCode: number;

  @Metadata()
  createObjectStorageBucketDefaultApplicationJsonObject?: CreateObjectStorageBucketDefaultApplicationJson;
}
