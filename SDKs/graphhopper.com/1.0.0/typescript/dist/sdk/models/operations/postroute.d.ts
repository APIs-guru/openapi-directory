import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRouteRequest extends SpeakeasyBase {
    request?: shared.RouteRequest;
}
export declare class PostRouteResponse extends SpeakeasyBase {
    contentType: string;
    ghError?: shared.GhError;
    headers: Map<string, string[]>;
    routeResponse?: shared.RouteResponse;
    statusCode: number;
}
