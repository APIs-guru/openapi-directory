import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum StatusCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Ok = "OK",
    Failed = "FAILED",
    Unknown = "UNKNOWN"
}
/**
 * Status specifies state for the subcomponent.
**/
export declare class Status extends SpeakeasyBase {
    code?: StatusCodeEnum;
    description?: string;
}
