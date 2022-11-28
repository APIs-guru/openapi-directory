import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteScriptPathParams extends SpeakeasyBase {
    scriptId: string;
}
export declare class DeleteScriptSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class DeleteScriptRequest extends SpeakeasyBase {
    pathParams: DeleteScriptPathParams;
    security: DeleteScriptSecurity;
}
export declare class DeleteScriptResponse extends SpeakeasyBase {
    contentType: string;
    deleted?: shared.Deleted;
    statusCode: number;
}
