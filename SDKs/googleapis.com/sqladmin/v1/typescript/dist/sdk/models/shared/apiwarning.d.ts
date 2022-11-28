import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ApiWarningCodeEnum {
    SqlApiWarningCodeUnspecified = "SQL_API_WARNING_CODE_UNSPECIFIED",
    RegionUnreachable = "REGION_UNREACHABLE",
    MaxResultsExceedsLimit = "MAX_RESULTS_EXCEEDS_LIMIT"
}
/**
 * An Admin API warning message.
**/
export declare class ApiWarning extends SpeakeasyBase {
    code?: ApiWarningCodeEnum;
    message?: string;
    region?: string;
}
