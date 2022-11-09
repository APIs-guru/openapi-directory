import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum FeatureStateCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Ok = "OK",
    Warning = "WARNING",
    Error = "ERROR"
}
/**
 * FeatureState describes the high-level state of a Feature. It may be used to describe a Feature's state at the environ-level, or per-membershop, depending on the context.
**/
export declare class FeatureState extends SpeakeasyBase {
    code?: FeatureStateCodeEnum;
    description?: string;
    updateTime?: string;
}
