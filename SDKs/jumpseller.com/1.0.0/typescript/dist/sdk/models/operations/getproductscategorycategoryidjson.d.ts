import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProductsCategoryCategoryIdJsonPathParams extends SpeakeasyBase {
    categoryId: number;
}
export declare class GetProductsCategoryCategoryIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    locale?: string;
    login: string;
}
export declare class GetProductsCategoryCategoryIdJsonRequest extends SpeakeasyBase {
    pathParams: GetProductsCategoryCategoryIdJsonPathParams;
    queryParams: GetProductsCategoryCategoryIdJsonQueryParams;
}
export declare class GetProductsCategoryCategoryIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    products?: shared.Product[];
    statusCode: number;
}
