import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ScriptErrorErrorCodeEnum {
    ErrorCodeUnspecified = "ERROR_CODE_UNSPECIFIED",
    SyntaxError = "SYNTAX_ERROR",
    DeprecatedSyntax = "DEPRECATED_SYNTAX",
    InternalError = "INTERNAL_ERROR"
}
/**
 * An error message for a custom bidding script.
**/
export declare class ScriptError extends SpeakeasyBase {
    column?: string;
    errorCode?: ScriptErrorErrorCodeEnum;
    errorMessage?: string;
    line?: string;
}
