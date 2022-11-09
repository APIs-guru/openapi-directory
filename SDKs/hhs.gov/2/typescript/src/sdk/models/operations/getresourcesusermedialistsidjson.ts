import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesUserMediaListsIdJsonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesUserMediaListsIdJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=displayMethod" })
  displayMethod?: string;
}


export class GetResourcesUserMediaListsIdJsonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourcesUserMediaListsIdJsonPathParams;

  @Metadata()
  queryParams: GetResourcesUserMediaListsIdJsonQueryParams;
}


export class GetResourcesUserMediaListsIdJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.MediaItemWrapped })
  mediaItemWrappeds?: shared.MediaItemWrapped[];

  @Metadata()
  statusCode: number;
}
