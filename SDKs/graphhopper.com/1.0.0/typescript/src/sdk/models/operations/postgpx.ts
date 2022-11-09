import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostGpxQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=gps_accuracy" })
  gpsAccuracy?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=vehicle" })
  vehicle?: string;
}


export class PostGpxRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: PostGpxQueryParams;
}


export class PostGpxResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ghError?: shared.GhError;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  routeResponse?: shared.RouteResponse;

  @Metadata()
  statusCode: number;
}
