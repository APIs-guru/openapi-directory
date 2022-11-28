import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class FindGlobalAuthModuleByIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class FindGlobalAuthModuleByIdSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class FindGlobalAuthModuleByIdRequest extends SpeakeasyBase {
    pathParams: FindGlobalAuthModuleByIdPathParams;
    security: FindGlobalAuthModuleByIdSecurity;
}
export declare class FindGlobalAuthModuleByIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    findGlobalAuthModuleById200ApplicationJsonOneOf?: any;
}
