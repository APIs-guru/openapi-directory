import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class BrowseNearEarthObjectsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;
}


export class BrowseNearEarthObjectsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: BrowseNearEarthObjectsQueryParams;
}


export class BrowseNearEarthObjectsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  nearEarthObject?: shared.NearEarthObject;

  @Metadata()
  statusCode: number;
}
