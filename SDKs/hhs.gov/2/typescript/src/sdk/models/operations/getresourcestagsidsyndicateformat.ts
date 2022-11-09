import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetResourcesTagsIdSyndicateFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesTagsIdSyndicateFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=displayMethod" })
  displayMethod?: string;
}


export class GetResourcesTagsIdSyndicateFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourcesTagsIdSyndicateFormatPathParams;

  @Metadata()
  queryParams: GetResourcesTagsIdSyndicateFormatQueryParams;
}


export class GetResourcesTagsIdSyndicateFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  getResourcesTagsIdSyndicateFormat200ApplicationJsonString?: string;

  @Metadata()
  statusCode: number;
}
