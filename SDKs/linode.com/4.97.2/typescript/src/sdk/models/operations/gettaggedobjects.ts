import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTaggedObjectsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=label" })
  label: string;
}


export class GetTaggedObjectsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetTaggedObjectsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetTaggedObjectsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetTaggedObjectsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTaggedObjectsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTaggedObjectsSecurityOption2;
}


export class GetTaggedObjectsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTaggedObjectsPathParams;

  @Metadata()
  queryParams: GetTaggedObjectsQueryParams;

  @Metadata()
  security: GetTaggedObjectsSecurity;
}


export class GetTaggedObjectsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetTaggedObjectsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getTaggedObjects200ApplicationJsonAny?: any;

  @Metadata()
  getTaggedObjectsDefaultApplicationJsonObject?: GetTaggedObjectsDefaultApplicationJson;
}
