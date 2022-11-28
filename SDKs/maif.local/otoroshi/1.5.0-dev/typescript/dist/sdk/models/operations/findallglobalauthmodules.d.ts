import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FindAllGlobalAuthModulesSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class FindAllGlobalAuthModulesRequest extends SpeakeasyBase {
    security: FindAllGlobalAuthModulesSecurity;
}
export declare class FindAllGlobalAuthModulesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    findAllGlobalAuthModules200ApplicationJsonOneoves?: any[];
}
