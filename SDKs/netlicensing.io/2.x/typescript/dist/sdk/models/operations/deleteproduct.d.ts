import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteProductPathParams extends SpeakeasyBase {
    productNumber: string;
}
export declare class DeleteProductQueryParams extends SpeakeasyBase {
    forceCascade?: boolean;
}
export declare class DeleteProductSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class DeleteProductRequest extends SpeakeasyBase {
    pathParams: DeleteProductPathParams;
    queryParams: DeleteProductQueryParams;
    security: DeleteProductSecurity;
}
export declare class DeleteProductResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
