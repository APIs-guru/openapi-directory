import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const VIEWOBJECTSTORAGEBUCKETACL_SERVERS = [
	"https://api.linode.com/v4",
];



export class ViewObjectStorageBucketAclPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class ViewObjectStorageBucketAclQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;
}


export class ViewObjectStorageBucketAclSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class ViewObjectStorageBucketAclSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class ViewObjectStorageBucketAclSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ViewObjectStorageBucketAclSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ViewObjectStorageBucketAclSecurityOption2;
}


export class ViewObjectStorageBucketAclRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: ViewObjectStorageBucketAclPathParams;

  @Metadata()
  queryParams: ViewObjectStorageBucketAclQueryParams;

  @Metadata()
  security: ViewObjectStorageBucketAclSecurity;
}

export enum ViewObjectStorageBucketAcl200ApplicationJsonAclEnum {
    Private = "private"
,    PublicRead = "public-read"
,    AuthenticatedRead = "authenticated-read"
,    PublicReadWrite = "public-read-write"
,    Custom = "custom"
}


export class ViewObjectStorageBucketAcl200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=acl" })
  acl?: ViewObjectStorageBucketAcl200ApplicationJsonAclEnum;

  @Metadata({ data: "json, name=acl_xml" })
  aclXml?: string;
}


export class ViewObjectStorageBucketAclDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class ViewObjectStorageBucketAclResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  viewObjectStorageBucketAcl200ApplicationJsonObject?: ViewObjectStorageBucketAcl200ApplicationJson;

  @Metadata()
  viewObjectStorageBucketAclDefaultApplicationJsonObject?: ViewObjectStorageBucketAclDefaultApplicationJson;
}
