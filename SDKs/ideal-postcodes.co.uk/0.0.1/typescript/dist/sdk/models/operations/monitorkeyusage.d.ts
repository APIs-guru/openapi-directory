import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MonitorKeyUsagePathParams extends SpeakeasyBase {
    key: string;
}
export declare class MonitorKeyUsageQueryParams extends SpeakeasyBase {
    end?: number;
    licensee?: string;
    start?: number;
    tags?: string;
}
export declare class MonitorKeyUsageSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
    userToken: shared.SchemeUserToken;
}
export declare class MonitorKeyUsageRequest extends SpeakeasyBase {
    pathParams: MonitorKeyUsagePathParams;
    queryParams: MonitorKeyUsageQueryParams;
    security: MonitorKeyUsageSecurity;
}
export declare class MonitorKeyUsageResponse extends SpeakeasyBase {
    contentType: string;
    errorResponseSchema?: shared.ErrorResponseSchema;
    keyUsageResponseSchema?: shared.KeyUsageResponseSchema;
    statusCode: number;
}
