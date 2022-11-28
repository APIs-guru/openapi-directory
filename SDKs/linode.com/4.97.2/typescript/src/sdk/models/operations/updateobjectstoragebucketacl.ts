import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateObjectStorageBucketAclServerList = [
	"https://api.linode.com/v4",
] as const;


export class UpdateObjectStorageBucketAclPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class UpdateObjectStorageBucketAclSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}

export enum UpdateObjectStorageBucketAcl200ApplicationJsonAclEnum {
    Private = "private",
    PublicRead = "public-read",
    AuthenticatedRead = "authenticated-read",
    PublicReadWrite = "public-read-write",
    Custom = "custom"
}


export class UpdateObjectStorageBucketAcl200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acl" })
  acl?: UpdateObjectStorageBucketAcl200ApplicationJsonAclEnum;

  @SpeakeasyMetadata({ data: "json, name=acl_xml" })
  aclXml?: string;
}


export class UpdateObjectStorageBucketAclDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateObjectStorageBucketAclRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateObjectStorageBucketAclPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: any;

  @SpeakeasyMetadata()
  security: UpdateObjectStorageBucketAclSecurity;
}


export class UpdateObjectStorageBucketAclResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateObjectStorageBucketAcl200ApplicationJsonObject?: UpdateObjectStorageBucketAcl200ApplicationJson;

  @SpeakeasyMetadata()
  updateObjectStorageBucketAclDefaultApplicationJsonObject?: UpdateObjectStorageBucketAclDefaultApplicationJson;
}
