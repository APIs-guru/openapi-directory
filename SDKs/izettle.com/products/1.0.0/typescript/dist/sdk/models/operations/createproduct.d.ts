import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateProductPathParams extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class CreateProductQueryParams extends SpeakeasyBase {
    returnEntity?: boolean;
}
export declare class CreateProductSecurity extends SpeakeasyBase {
    zettleApiKey?: shared.SchemeZettleApiKey;
    zettleOauth?: shared.SchemeZettleOauth;
}
export declare class CreateProductRequest extends SpeakeasyBase {
    pathParams: CreateProductPathParams;
    queryParams: CreateProductQueryParams;
    request: shared.ProductCreateRequest;
    security: CreateProductSecurity;
}
export declare class CreateProductResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    productResponse?: shared.ProductResponse;
    statusCode: number;
}
