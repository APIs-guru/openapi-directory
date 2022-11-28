import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResourcesSourcesIdSyndicateFormatPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesSourcesIdSyndicateFormatQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=displayMethod" })
  displayMethod?: string;
}


export class GetResourcesSourcesIdSyndicateFormatRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetResourcesSourcesIdSyndicateFormatPathParams;

  @SpeakeasyMetadata()
  queryParams: GetResourcesSourcesIdSyndicateFormatQueryParams;
}


export class GetResourcesSourcesIdSyndicateFormatResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.MediaItemWrapped })
  mediaItemWrappeds?: shared.MediaItemWrapped[];

  @SpeakeasyMetadata()
  statusCode: number;
}
