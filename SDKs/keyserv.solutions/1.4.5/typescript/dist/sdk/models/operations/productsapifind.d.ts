import { SpeakeasyBase } from "../../../internal/utils";
export declare class ProductsApiFindQueryParams extends SpeakeasyBase {
    page?: number;
}
export declare class ProductsApiFindRequest extends SpeakeasyBase {
    queryParams: ProductsApiFindQueryParams;
    request: any;
}
export declare class ProductsApiFindResponse extends SpeakeasyBase {
    contentType: string;
    productsApiFind200ApplicationJsonOneOf?: any;
    statusCode: number;
}
