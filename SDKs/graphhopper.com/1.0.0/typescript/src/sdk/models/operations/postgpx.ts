import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostGpxQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=gps_accuracy" })
  gpsAccuracy?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vehicle" })
  vehicle?: string;
}


export class PostGpxRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostGpxQueryParams;
}


export class PostGpxResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  ghError?: shared.GhError;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  routeResponse?: shared.RouteResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
