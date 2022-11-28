import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const GetObjectStorageBucketContentServerList = [
	"https://api.linode.com/v4",
] as const;


export class GetObjectStorageBucketContentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=bucket" })
  bucket: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=clusterId" })
  clusterId: string;
}


export class GetObjectStorageBucketContentQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=delimiter" })
  delimiter?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=marker" })
  marker?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prefix" })
  prefix?: string;
}


export class GetObjectStorageBucketContentSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetObjectStorageBucketContentDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetObjectStorageBucketContentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: GetObjectStorageBucketContentPathParams;

  @SpeakeasyMetadata()
  queryParams: GetObjectStorageBucketContentQueryParams;

  @SpeakeasyMetadata()
  security: GetObjectStorageBucketContentSecurity;
}


export class GetObjectStorageBucketContentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getObjectStorageBucketContent200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getObjectStorageBucketContentDefaultApplicationJsonObject?: GetObjectStorageBucketContentDefaultApplicationJson;
}
