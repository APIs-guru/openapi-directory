import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesTagsFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;
}


export class GetResourcesTagsFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=mediaId" })
  mediaId?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=name" })
  name?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=nameContains" })
  nameContains?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: string;

  @Metadata({ data: "queryParam, style=form;explode=false;name=typeId" })
  typeId?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=typeName" })
  typeName?: string;
}


export class GetResourcesTagsFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourcesTagsFormatPathParams;

  @Metadata()
  queryParams: GetResourcesTagsFormatQueryParams;
}


export class GetResourcesTagsFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.TagMarshallerWrapped })
  tagMarshallerWrappeds?: shared.TagMarshallerWrapped[];
}
