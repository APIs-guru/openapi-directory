import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteGlobalAuthModulePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DeleteGlobalAuthModuleSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class DeleteGlobalAuthModuleRequest extends SpeakeasyBase {
    pathParams: DeleteGlobalAuthModulePathParams;
    security: DeleteGlobalAuthModuleSecurity;
}
export declare class DeleteGlobalAuthModuleResponse extends SpeakeasyBase {
    contentType: string;
    deleted?: shared.Deleted;
    statusCode: number;
}
