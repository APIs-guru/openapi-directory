import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetSeriesIdInstancesTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetSeriesIdInstancesTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ignore-length" })
  ignoreLength?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetSeriesIdInstancesTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetSeriesIdInstancesTagsPathParams;

  @Metadata()
  queryParams: GetSeriesIdInstancesTagsQueryParams;
}


export class GetSeriesIdInstancesTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getSeriesIdInstancesTags200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
