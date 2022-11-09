import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATEOBJECTSTORAGEBUCKETACL_SERVERS = [
	"https://api.linode.com/v4",
];



export class UpdateObjectStorageBucketAclPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class UpdateObjectStorageBucketAclSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateObjectStorageBucketAclSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateObjectStorageBucketAclSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateObjectStorageBucketAclSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateObjectStorageBucketAclSecurityOption2;
}


export class UpdateObjectStorageBucketAclRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateObjectStorageBucketAclPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: UpdateObjectStorageBucketAclSecurity;
}

export enum UpdateObjectStorageBucketAcl200ApplicationJsonAclEnum {
    Private = "private"
,    PublicRead = "public-read"
,    AuthenticatedRead = "authenticated-read"
,    PublicReadWrite = "public-read-write"
,    Custom = "custom"
}


export class UpdateObjectStorageBucketAcl200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=acl" })
  acl?: UpdateObjectStorageBucketAcl200ApplicationJsonAclEnum;

  @Metadata({ data: "json, name=acl_xml" })
  aclXml?: string;
}


export class UpdateObjectStorageBucketAclDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateObjectStorageBucketAclResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateObjectStorageBucketAcl200ApplicationJsonObject?: UpdateObjectStorageBucketAcl200ApplicationJson;

  @Metadata()
  updateObjectStorageBucketAclDefaultApplicationJsonObject?: UpdateObjectStorageBucketAclDefaultApplicationJson;
}
