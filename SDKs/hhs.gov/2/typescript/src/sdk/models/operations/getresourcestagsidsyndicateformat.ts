import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetResourcesTagsIdSyndicateFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesTagsIdSyndicateFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=displayMethod" })
  displayMethod?: string;
}


export class GetResourcesTagsIdSyndicateFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetResourcesTagsIdSyndicateFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetResourcesTagsIdSyndicateFormatQueryParams;
}


export class GetResourcesTagsIdSyndicateFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getResourcesTagsIdSyndicateFormat200ApplicationJsonString?: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
