import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class OndRoutePathParams extends SpeakeasyBase {
    destination: string;
    origin: string;
}
export declare class OndRouteQueryParams extends SpeakeasyBase {
    catalogues?: string;
    limit?: string;
    offset?: string;
}
export declare class OndRouteHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class OndRouteSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class OndRouteRequest extends SpeakeasyBase {
    pathParams: OndRoutePathParams;
    queryParams: OndRouteQueryParams;
    headers: OndRouteHeaders;
    security: OndRouteSecurity;
}
export declare class OndRouteResponse extends SpeakeasyBase {
    contentType: string;
    ondRoute200ApplicationJsonString?: string;
    statusCode: number;
}
