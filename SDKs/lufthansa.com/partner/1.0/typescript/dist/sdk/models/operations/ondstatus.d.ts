import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OndStatusQueryParams extends SpeakeasyBase {
    catalogues?: string;
    newRoutes?: string;
    oldRoutes?: string;
}
export declare class OndStatusHeaders extends SpeakeasyBase {
    accept: string;
}
export declare class OndStatusSecurity extends SpeakeasyBase {
    auth: shared.SchemeAuth;
}
export declare class OndStatusRequest extends SpeakeasyBase {
    queryParams: OndStatusQueryParams;
    headers: OndStatusHeaders;
    security: OndStatusSecurity;
}
export declare class OndStatusResponse extends SpeakeasyBase {
    contentType: string;
    ondStatus200ApplicationJsonString?: string;
    statusCode: number;
}
