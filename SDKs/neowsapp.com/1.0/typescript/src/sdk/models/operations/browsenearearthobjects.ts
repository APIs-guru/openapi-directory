import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class BrowseNearEarthObjectsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=size" })
  size?: number;
}


export class BrowseNearEarthObjectsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: BrowseNearEarthObjectsQueryParams;
}


export class BrowseNearEarthObjectsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  nearEarthObject?: shared.NearEarthObject;

  @SpeakeasyMetadata()
  statusCode: number;
}
