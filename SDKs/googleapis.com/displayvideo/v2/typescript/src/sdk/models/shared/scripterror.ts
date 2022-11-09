import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ScriptErrorErrorCodeEnum {
    ErrorCodeUnspecified = "ERROR_CODE_UNSPECIFIED"
,    SyntaxError = "SYNTAX_ERROR"
,    DeprecatedSyntax = "DEPRECATED_SYNTAX"
,    InternalError = "INTERNAL_ERROR"
}


// ScriptError
/** 
 * An error message for a custom bidding script.
**/
export class ScriptError extends SpeakeasyBase {
  @Metadata({ data: "json, name=column" })
  column?: string;

  @Metadata({ data: "json, name=errorCode" })
  errorCode?: ScriptErrorErrorCodeEnum;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=line" })
  line?: string;
}
