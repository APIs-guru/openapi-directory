import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class ProductsApiDeleteProductPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class ProductsApiDeleteProductHeaders extends SpeakeasyBase {
    xApiKey: string;
}
export declare class ProductsApiDeleteProductRequest extends SpeakeasyBase {
    pathParams: ProductsApiDeleteProductPathParams;
    headers: ProductsApiDeleteProductHeaders;
}
export declare class ProductsApiDeleteProductResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
