import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DiagnosticKindEnum {
    Warning = "WARNING",
    Error = "ERROR"
}
/**
 * Represents a diagnostic message (error or warning)
**/
export declare class Diagnostic extends SpeakeasyBase {
    kind?: DiagnosticKindEnum;
    location?: string;
    message?: string;
}
