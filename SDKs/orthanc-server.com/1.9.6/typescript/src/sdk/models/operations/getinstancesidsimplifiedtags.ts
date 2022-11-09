import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInstancesIdSimplifiedTagsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdSimplifiedTagsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=ignore-length" })
  ignoreLength?: string[];
}


export class GetInstancesIdSimplifiedTagsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetInstancesIdSimplifiedTagsPathParams;

  @Metadata()
  queryParams: GetInstancesIdSimplifiedTagsQueryParams;
}


export class GetInstancesIdSimplifiedTagsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getInstancesIdSimplifiedTags200ApplicationJsonAny?: any;

  @Metadata()
  statusCode: number;
}
