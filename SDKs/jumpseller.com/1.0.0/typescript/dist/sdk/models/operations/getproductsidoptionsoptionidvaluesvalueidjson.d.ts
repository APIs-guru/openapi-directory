import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductsIdOptionsOptionIdValuesValueIdJsonPathParams extends SpeakeasyBase {
    id: number;
    optionId: number;
    valueId: number;
}
export declare class GetProductsIdOptionsOptionIdValuesValueIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetProductsIdOptionsOptionIdValuesValueIdJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsIdOptionsOptionIdValuesValueIdJsonPathParams;
    queryParams: GetProductsIdOptionsOptionIdValuesValueIdJsonQueryParams;
}
export declare class GetProductsIdOptionsOptionIdValuesValueIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    productOptionValue?: shared.ProductOptionValue;
    statusCode: number;
}
