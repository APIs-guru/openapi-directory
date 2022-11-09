import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSeriesIdSharedTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSeriesIdSharedTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetSeriesIdSharedTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSeriesIdSharedTagsPathParams;

  @Metadata()
  queryParams: GetSeriesIdSharedTagsQueryParams;
}


export class GetSeriesIdSharedTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSeriesIdSharedTags200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
