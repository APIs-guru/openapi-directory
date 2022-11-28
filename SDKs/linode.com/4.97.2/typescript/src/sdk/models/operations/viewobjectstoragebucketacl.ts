import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ViewObjectStorageBucketAclServerList = [
	"https://api.linode.com/v4",
] as const;


export class ViewObjectStorageBucketAclPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class ViewObjectStorageBucketAclQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=name" })
  name: string;
}


export class ViewObjectStorageBucketAclSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}

export enum ViewObjectStorageBucketAcl200ApplicationJsonAclEnum {
    Private = "private",
    PublicRead = "public-read",
    AuthenticatedRead = "authenticated-read",
    PublicReadWrite = "public-read-write",
    Custom = "custom"
}


export class ViewObjectStorageBucketAcl200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acl" })
  acl?: ViewObjectStorageBucketAcl200ApplicationJsonAclEnum;

  @SpeakeasyMetadata({ data: "json, name=acl_xml" })
  aclXml?: string;
}


export class ViewObjectStorageBucketAclDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class ViewObjectStorageBucketAclRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: ViewObjectStorageBucketAclPathParams;

  @SpeakeasyMetadata()
  queryParams: ViewObjectStorageBucketAclQueryParams;

  @SpeakeasyMetadata()
  security: ViewObjectStorageBucketAclSecurity;
}


export class ViewObjectStorageBucketAclResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  viewObjectStorageBucketAcl200ApplicationJsonObject?: ViewObjectStorageBucketAcl200ApplicationJson;

  @SpeakeasyMetadata()
  viewObjectStorageBucketAclDefaultApplicationJsonObject?: ViewObjectStorageBucketAclDefaultApplicationJson;
}
