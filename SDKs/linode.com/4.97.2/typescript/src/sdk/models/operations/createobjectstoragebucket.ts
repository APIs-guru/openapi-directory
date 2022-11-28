import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateObjectStorageBucketServerList = [
	"https://api.linode.com/v4",
] as const;

export enum CreateObjectStorageBucketRequestBodyAclEnum {
    Private = "private",
    PublicRead = "public-read",
    AuthenticatedRead = "authenticated-read",
    PublicReadWrite = "public-read-write"
}


export class CreateObjectStorageBucketRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acl" })
  acl?: CreateObjectStorageBucketRequestBodyAclEnum;

  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster: string;

  @SpeakeasyMetadata({ data: "json, name=cors_enabled" })
  corsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;
}


export class CreateObjectStorageBucketSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class CreateObjectStorageBucketDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateObjectStorageBucketRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: CreateObjectStorageBucketRequestBody;

  @SpeakeasyMetadata()
  security: CreateObjectStorageBucketSecurity;
}


export class CreateObjectStorageBucketResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  objectStorageBucket?: shared.ObjectStorageBucket;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createObjectStorageBucketDefaultApplicationJsonObject?: CreateObjectStorageBucketDefaultApplicationJson;
}
