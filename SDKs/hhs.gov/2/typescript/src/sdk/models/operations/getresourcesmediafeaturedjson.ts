import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetResourcesMediaFeaturedJsonQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=false;name=max" })
  max?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=offset" })
  offset?: number;

  @Metadata({ data: "queryParam, style=form;explode=false;name=sort" })
  sort?: string;
}


export class GetResourcesMediaFeaturedJsonRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetResourcesMediaFeaturedJsonQueryParams;
}


export class GetResourcesMediaFeaturedJsonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.MediaItem })
  mediaItems?: shared.MediaItem[];

  @Metadata()
  statusCode: number;
}
