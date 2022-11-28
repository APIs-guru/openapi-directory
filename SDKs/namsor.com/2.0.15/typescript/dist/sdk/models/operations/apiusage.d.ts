import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApiUsageSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ApiUsageRequest extends SpeakeasyBase {
    security: ApiUsageSecurity;
}
export declare class ApiUsageResponse extends SpeakeasyBase {
    apiPeriodUsageOut?: shared.ApiPeriodUsageOut;
    contentType: string;
    statusCode: number;
}
