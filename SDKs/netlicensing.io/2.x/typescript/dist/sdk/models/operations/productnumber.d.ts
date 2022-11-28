import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProductNumberPathParams extends SpeakeasyBase {
    productNumber: string;
}
export declare class ProductNumberSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class ProductNumberRequest extends SpeakeasyBase {
    pathParams: ProductNumberPathParams;
    security: ProductNumberSecurity;
}
export declare class ProductNumberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
