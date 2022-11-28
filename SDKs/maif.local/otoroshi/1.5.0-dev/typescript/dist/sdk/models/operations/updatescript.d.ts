import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateScriptPathParams extends SpeakeasyBase {
    scriptId: string;
}
export declare class UpdateScriptSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class UpdateScriptRequest extends SpeakeasyBase {
    pathParams: UpdateScriptPathParams;
    request?: shared.Script;
    security: UpdateScriptSecurity;
}
export declare class UpdateScriptResponse extends SpeakeasyBase {
    contentType: string;
    script?: shared.Script;
    statusCode: number;
}
