import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateProductRequestBodyVatModeEnum {
    Gross = "GROSS",
    Net = "NET"
}
export declare class CreateProductRequestBody extends SpeakeasyBase {
    active: boolean;
    description?: string;
    licenseeAutoCreate?: boolean;
    licensingInfo?: string;
    name: string;
    number?: string;
    vatMode?: CreateProductRequestBodyVatModeEnum;
    version: string;
}
export declare class CreateProductSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class CreateProductRequest extends SpeakeasyBase {
    request?: CreateProductRequestBody;
    security: CreateProductSecurity;
}
export declare class CreateProductResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    netlicensing?: any;
}
