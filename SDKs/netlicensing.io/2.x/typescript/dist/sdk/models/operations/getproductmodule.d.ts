import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetProductModulePathParams extends SpeakeasyBase {
    productModuleNumber: string;
}
export declare class GetProductModuleSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetProductModuleRequest extends SpeakeasyBase {
    pathParams: GetProductModulePathParams;
    security: GetProductModuleSecurity;
}
export declare class GetProductModuleResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
