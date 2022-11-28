import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResourcesMediaSearchResultsJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=q" })
  q: string;
}


export class GetResourcesMediaSearchResultsJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetResourcesMediaSearchResultsJsonQueryParams;
}


export class GetResourcesMediaSearchResultsJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.MediaItemWrapped })
  mediaItemWrappeds?: shared.MediaItemWrapped[];

  @SpeakeasyMetadata()
  statusCode: number;
}
