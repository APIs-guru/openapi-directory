import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesTagsIdRelatedFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesTagsIdRelatedFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: string;
}


export class GetResourcesTagsIdRelatedFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourcesTagsIdRelatedFormatPathParams;

  @Metadata()
  queryParams: GetResourcesTagsIdRelatedFormatQueryParams;
}


export class GetResourcesTagsIdRelatedFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TagMarshallerWrapped })
  tagMarshallerWrappeds?: shared.TagMarshallerWrapped[];
}
