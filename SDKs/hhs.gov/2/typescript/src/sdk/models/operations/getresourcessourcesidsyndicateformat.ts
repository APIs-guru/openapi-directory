import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesSourcesIdSyndicateFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesSourcesIdSyndicateFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=displayMethod" })
  displayMethod?: string;
}


export class GetResourcesSourcesIdSyndicateFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourcesSourcesIdSyndicateFormatPathParams;

  @Metadata()
  queryParams: GetResourcesSourcesIdSyndicateFormatQueryParams;
}


export class GetResourcesSourcesIdSyndicateFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.MediaItemWrapped })
  mediaItemWrappeds?: shared.MediaItemWrapped[];

  @Metadata()
  statusCode: number;
}
