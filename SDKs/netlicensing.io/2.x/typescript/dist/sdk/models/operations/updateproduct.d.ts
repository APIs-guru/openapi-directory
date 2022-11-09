import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UpdateProductPathParams extends SpeakeasyBase {
    productNumber: string;
}
export declare enum UpdateProductRequestBodyVatModeEnum {
    Gross = "GROSS",
    Net = "NET"
}
export declare class UpdateProductRequestBody extends SpeakeasyBase {
    active?: boolean;
    description?: string;
    licenseeAutoCreate?: boolean;
    licensingInfo?: string;
    name?: string;
    number?: string;
    vatMode?: UpdateProductRequestBodyVatModeEnum;
    version?: string;
}
export declare class UpdateProductSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class UpdateProductRequest extends SpeakeasyBase {
    pathParams: UpdateProductPathParams;
    request?: UpdateProductRequestBody;
    security: UpdateProductSecurity;
}
export declare class UpdateProductResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
