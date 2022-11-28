import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutProductsIdOptionsOptionIdJsonPathParams extends SpeakeasyBase {
    id: number;
    optionId: number;
}
export declare class PutProductsIdOptionsOptionIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PutProductsIdOptionsOptionIdJsonRequest extends SpeakeasyBase {
    pathParams: PutProductsIdOptionsOptionIdJsonPathParams;
    queryParams: PutProductsIdOptionsOptionIdJsonQueryParams;
    request: shared.ProductOptionEdit;
}
export declare class PutProductsIdOptionsOptionIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    productOption?: shared.ProductOption;
    statusCode: number;
}
