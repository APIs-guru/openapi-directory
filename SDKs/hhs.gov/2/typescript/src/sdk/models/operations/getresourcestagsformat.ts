import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResourcesTagsFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;
}


export class GetResourcesTagsFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=mediaId" })
  mediaId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=nameContains" })
  nameContains?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=typeId" })
  typeId?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=typeName" })
  typeName?: string;
}


export class GetResourcesTagsFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetResourcesTagsFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetResourcesTagsFormatQueryParams;
}


export class GetResourcesTagsFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.TagMarshallerWrapped })
  tagMarshallerWrappeds?: shared.TagMarshallerWrapped[];
}
