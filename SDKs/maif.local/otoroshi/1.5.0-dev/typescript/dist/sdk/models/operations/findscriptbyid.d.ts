import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FindScriptByIdPathParams extends SpeakeasyBase {
    scriptId: string;
}
export declare class FindScriptByIdSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class FindScriptByIdRequest extends SpeakeasyBase {
    pathParams: FindScriptByIdPathParams;
    security: FindScriptByIdSecurity;
}
export declare class FindScriptByIdResponse extends SpeakeasyBase {
    contentType: string;
    script?: shared.Script;
    statusCode: number;
}
