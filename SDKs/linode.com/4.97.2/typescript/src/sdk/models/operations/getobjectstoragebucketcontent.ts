import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const GETOBJECTSTORAGEBUCKETCONTENT_SERVERS = [
	"https://api.linode.com/v4",
];



export class GetObjectStorageBucketContentPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class GetObjectStorageBucketContentQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=delimiter" })
  delimiter?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=marker" })
  marker?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=prefix" })
  prefix?: string;
}


export class GetObjectStorageBucketContentSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetObjectStorageBucketContentSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetObjectStorageBucketContentSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetObjectStorageBucketContentSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetObjectStorageBucketContentSecurityOption2;
}


export class GetObjectStorageBucketContentRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: GetObjectStorageBucketContentPathParams;

  @Metadata()
  queryParams: GetObjectStorageBucketContentQueryParams;

  @Metadata()
  security: GetObjectStorageBucketContentSecurity;
}


export class GetObjectStorageBucketContentDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetObjectStorageBucketContentResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getObjectStorageBucketContent200ApplicationJsonAny?: any;

  @Metadata()
  getObjectStorageBucketContentDefaultApplicationJsonObject?: GetObjectStorageBucketContentDefaultApplicationJson;
}
