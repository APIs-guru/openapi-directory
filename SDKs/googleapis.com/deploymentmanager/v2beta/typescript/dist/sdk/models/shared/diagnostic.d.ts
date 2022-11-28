import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DiagnosticLevelEnum {
    Unknown = "UNKNOWN",
    Information = "INFORMATION",
    Warning = "WARNING",
    Error = "ERROR"
}
export declare class Diagnostic extends SpeakeasyBase {
    field?: string;
    level?: DiagnosticLevelEnum;
}
