import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResourcesTagsIdMediaFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesTagsIdMediaFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: string;
}


export class GetResourcesTagsIdMediaFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetResourcesTagsIdMediaFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetResourcesTagsIdMediaFormatQueryParams;
}


export class GetResourcesTagsIdMediaFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.MediaItemWrapped })
  mediaItemWrappeds?: shared.MediaItemWrapped[];

  @SpeakeasyMetadata()
  statusCode: number;
}
