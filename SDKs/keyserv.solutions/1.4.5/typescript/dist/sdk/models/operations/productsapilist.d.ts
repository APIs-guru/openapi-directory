import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ProductsApiListQueryParams extends SpeakeasyBase {
    page?: number;
}
export declare class ProductsApiListRequest extends SpeakeasyBase {
    queryParams: ProductsApiListQueryParams;
    request: any;
}
export declare class ProductsApiListResponse extends SpeakeasyBase {
    contentType: string;
    productViews?: shared.ProductView[];
    statusCode: number;
}
