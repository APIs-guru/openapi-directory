import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class OsBrowsersQueryParams extends SpeakeasyBase {
    os?: string;
}
export declare class OsBrowsersSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class OsBrowsersRequest extends SpeakeasyBase {
    queryParams: OsBrowsersQueryParams;
    security: OsBrowsersSecurity;
}
export declare class OsBrowsersResponse extends SpeakeasyBase {
    accessDenied?: any;
    contentType: string;
    statusCode: number;
    osBrowsers?: any;
}
