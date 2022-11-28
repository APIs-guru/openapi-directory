import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTaggedObjectsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=label" })
  label: string;
}


export class GetTaggedObjectsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetTaggedObjectsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetTaggedObjectsDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetTaggedObjectsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTaggedObjectsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTaggedObjectsQueryParams;

  @SpeakeasyMetadata()
  security: GetTaggedObjectsSecurity;
}


export class GetTaggedObjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTaggedObjects200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  getTaggedObjectsDefaultApplicationJsonObject?: GetTaggedObjectsDefaultApplicationJson;
}
