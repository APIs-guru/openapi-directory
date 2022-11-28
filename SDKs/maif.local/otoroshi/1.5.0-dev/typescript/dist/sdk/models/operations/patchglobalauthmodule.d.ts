import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchGlobalAuthModulePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PatchGlobalAuthModuleSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class PatchGlobalAuthModuleRequest extends SpeakeasyBase {
    pathParams: PatchGlobalAuthModulePathParams;
    request?: shared.Patch[];
    security: PatchGlobalAuthModuleSecurity;
}
export declare class PatchGlobalAuthModuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    patchGlobalAuthModule200ApplicationJsonOneOf?: any;
}
