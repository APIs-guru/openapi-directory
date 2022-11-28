import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutProductsIdOptionsOptionIdValuesValueIdJsonPathParams extends SpeakeasyBase {
    id: number;
    optionId: number;
    valueId: number;
}
export declare class PutProductsIdOptionsOptionIdValuesValueIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PutProductsIdOptionsOptionIdValuesValueIdJsonRequest extends SpeakeasyBase {
    pathParams: PutProductsIdOptionsOptionIdValuesValueIdJsonPathParams;
    queryParams: PutProductsIdOptionsOptionIdValuesValueIdJsonQueryParams;
    request: shared.ProductOptionValueEdit;
}
export declare class PutProductsIdOptionsOptionIdValuesValueIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    productOptionValue?: shared.ProductOptionValue;
    statusCode: number;
}
