import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGlobalAuthModulePathParams extends SpeakeasyBase {
    id: string;
}
export declare class UpdateGlobalAuthModuleSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class UpdateGlobalAuthModuleRequest extends SpeakeasyBase {
    pathParams: UpdateGlobalAuthModulePathParams;
    request?: any;
    security: UpdateGlobalAuthModuleSecurity;
}
export declare class UpdateGlobalAuthModuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateGlobalAuthModule200ApplicationJsonOneOf?: any;
}
