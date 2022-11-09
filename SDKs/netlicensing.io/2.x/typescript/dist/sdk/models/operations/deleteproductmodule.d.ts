import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class DeleteProductModulePathParams extends SpeakeasyBase {
    productModuleNumber: string;
}
export declare class DeleteProductModuleQueryParams extends SpeakeasyBase {
    forceCascade?: boolean;
}
export declare class DeleteProductModuleSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class DeleteProductModuleRequest extends SpeakeasyBase {
    pathParams: DeleteProductModulePathParams;
    queryParams: DeleteProductModuleQueryParams;
    security: DeleteProductModuleSecurity;
}
export declare class DeleteProductModuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
