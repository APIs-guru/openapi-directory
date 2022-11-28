import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateGlobalAuthModuleSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class CreateGlobalAuthModuleRequest extends SpeakeasyBase {
    request?: any;
    security: CreateGlobalAuthModuleSecurity;
}
export declare class CreateGlobalAuthModuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createGlobalAuthModule200ApplicationJsonOneOf?: any;
}
