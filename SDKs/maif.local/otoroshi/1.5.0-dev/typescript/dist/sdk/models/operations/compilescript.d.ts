import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompileScriptSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class CompileScriptRequest extends SpeakeasyBase {
    request?: shared.Script;
    security: CompileScriptSecurity;
}
export declare class CompileScriptResponse extends SpeakeasyBase {
    contentType: string;
    scriptCompilationResult?: shared.ScriptCompilationResult;
    statusCode: number;
}
