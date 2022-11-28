import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetResourcesUserMediaListsIdJsonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesUserMediaListsIdJsonQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=displayMethod" })
  displayMethod?: string;
}


export class GetResourcesUserMediaListsIdJsonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetResourcesUserMediaListsIdJsonPathParams;

  @SpeakeasyMetadata()
  queryParams: GetResourcesUserMediaListsIdJsonQueryParams;
}


export class GetResourcesUserMediaListsIdJsonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.MediaItemWrapped })
  mediaItemWrappeds?: shared.MediaItemWrapped[];

  @SpeakeasyMetadata()
  statusCode: number;
}
