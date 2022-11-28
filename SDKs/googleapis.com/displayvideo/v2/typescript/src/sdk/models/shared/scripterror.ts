import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ScriptErrorErrorCodeEnum {
    ErrorCodeUnspecified = "ERROR_CODE_UNSPECIFIED",
    SyntaxError = "SYNTAX_ERROR",
    DeprecatedSyntax = "DEPRECATED_SYNTAX",
    InternalError = "INTERNAL_ERROR"
}


// ScriptError
/** 
 * An error message for a custom bidding script.
**/
export class ScriptError extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column" })
  column?: string;

  @SpeakeasyMetadata({ data: "json, name=errorCode" })
  errorCode?: ScriptErrorErrorCodeEnum;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=line" })
  line?: string;
}
