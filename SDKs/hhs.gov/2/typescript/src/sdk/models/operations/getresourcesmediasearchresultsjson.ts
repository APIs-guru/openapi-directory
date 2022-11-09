import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesMediaSearchResultsJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=q" })
  q: string;
}


export class GetResourcesMediaSearchResultsJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetResourcesMediaSearchResultsJsonQueryParams;
}


export class GetResourcesMediaSearchResultsJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.MediaItemWrapped })
  mediaItemWrappeds?: shared.MediaItemWrapped[];

  @Metadata()
  statusCode: number;
}
