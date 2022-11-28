import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchScriptPathParams extends SpeakeasyBase {
    scriptId: string;
}
export declare class PatchScriptSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class PatchScriptRequest extends SpeakeasyBase {
    pathParams: PatchScriptPathParams;
    request?: shared.Patch[];
    security: PatchScriptSecurity;
}
export declare class PatchScriptResponse extends SpeakeasyBase {
    contentType: string;
    script?: shared.Script;
    statusCode: number;
}
