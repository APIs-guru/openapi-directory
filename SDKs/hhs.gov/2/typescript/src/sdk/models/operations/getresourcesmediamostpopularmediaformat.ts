import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesMediaMostPopularMediaFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;
}


export class GetResourcesMediaMostPopularMediaFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=offset" })
  offset?: number;
}


export class GetResourcesMediaMostPopularMediaFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourcesMediaMostPopularMediaFormatPathParams;

  @Metadata()
  queryParams: GetResourcesMediaMostPopularMediaFormatQueryParams;
}


export class GetResourcesMediaMostPopularMediaFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.MediaItemWrapped })
  mediaItemWrappeds?: shared.MediaItemWrapped[];

  @Metadata()
  statusCode: number;
}
