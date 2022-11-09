import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ignore-length" })
  ignoreLength?: string[];

  @Metadata({ data: "queryParam, style=form;explode=true;name=short" })
  short?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=simplify" })
  simplify?: boolean;
}


export class GetInstancesIdTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdTagsPathParams;

  @Metadata()
  queryParams: GetInstancesIdTagsQueryParams;
}


export class GetInstancesIdTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInstancesIdTags200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
