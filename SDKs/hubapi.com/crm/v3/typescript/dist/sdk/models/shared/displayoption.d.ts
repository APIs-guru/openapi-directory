import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DisplayOptionTypeEnum {
    Default = "DEFAULT",
    Success = "SUCCESS",
    Warning = "WARNING",
    Danger = "DANGER",
    Info = "INFO"
}
/**
 * Option definition for STATUS dataTypes.
**/
export declare class DisplayOption extends SpeakeasyBase {
    label: string;
    name: string;
    type: DisplayOptionTypeEnum;
}
