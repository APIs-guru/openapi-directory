import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostRouteRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request?: shared.RouteRequest;
}


export class PostRouteResponse extends SpeakeasyBase {
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
