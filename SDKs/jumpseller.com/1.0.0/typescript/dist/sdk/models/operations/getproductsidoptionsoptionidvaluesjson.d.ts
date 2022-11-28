import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductsIdOptionsOptionIdValuesJsonPathParams extends SpeakeasyBase {
    id: number;
    optionId: number;
}
export declare class GetProductsIdOptionsOptionIdValuesJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetProductsIdOptionsOptionIdValuesJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsIdOptionsOptionIdValuesJsonPathParams;
    queryParams: GetProductsIdOptionsOptionIdValuesJsonQueryParams;
}
export declare class GetProductsIdOptionsOptionIdValuesJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    productOptionValues?: shared.ProductOptionValue[];
    statusCode: number;
}
