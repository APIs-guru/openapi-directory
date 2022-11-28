import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetInstancesIdSimplifiedTagsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetInstancesIdSimplifiedTagsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignore-length" })
  ignoreLength?: string[];
}


export class GetInstancesIdSimplifiedTagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetInstancesIdSimplifiedTagsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetInstancesIdSimplifiedTagsQueryParams;
}


export class GetInstancesIdSimplifiedTagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getInstancesIdSimplifiedTags200ApplicationJsonAny?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
