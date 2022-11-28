import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResourcesMediaMostPopularMediaFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;
}


export class GetResourcesMediaMostPopularMediaFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=offset" })
  offset?: number;
}


export class GetResourcesMediaMostPopularMediaFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetResourcesMediaMostPopularMediaFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetResourcesMediaMostPopularMediaFormatQueryParams;
}


export class GetResourcesMediaMostPopularMediaFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.MediaItemWrapped })
  mediaItemWrappeds?: shared.MediaItemWrapped[];

  @SpeakeasyMetadata()
  statusCode: number;
}
