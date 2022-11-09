import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesTagsIdMediaFormatPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetResourcesTagsIdMediaFormatQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: string;
}


export class GetResourcesTagsIdMediaFormatRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetResourcesTagsIdMediaFormatPathParams;

  @Metadata()
  queryParams: GetResourcesTagsIdMediaFormatQueryParams;
}


export class GetResourcesTagsIdMediaFormatResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.MediaItemWrapped })
  mediaItemWrappeds?: shared.MediaItemWrapped[];

  @Metadata()
  statusCode: number;
}
