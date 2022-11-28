import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostGpxQueryParams extends SpeakeasyBase {
    gpsAccuracy?: number;
    vehicle?: string;
}
export declare class PostGpxRequest extends SpeakeasyBase {
    queryParams: PostGpxQueryParams;
}
export declare class PostGpxResponse extends SpeakeasyBase {
    contentType: string;
    ghError?: shared.GhError;
    headers: Map<string, string[]>;
    routeResponse?: shared.RouteResponse;
    statusCode: number;
}
