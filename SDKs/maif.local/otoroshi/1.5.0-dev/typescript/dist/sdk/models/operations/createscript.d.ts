import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateScriptSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class CreateScriptRequest extends SpeakeasyBase {
    request?: shared.Script;
    security: CreateScriptSecurity;
}
export declare class CreateScriptResponse extends SpeakeasyBase {
    contentType: string;
    script?: shared.Script;
    statusCode: number;
}
