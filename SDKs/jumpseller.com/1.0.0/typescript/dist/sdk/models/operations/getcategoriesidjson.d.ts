import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCategoriesIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetCategoriesIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetCategoriesIdJsonRequest extends SpeakeasyBase {
    pathParams: GetCategoriesIdJsonPathParams;
    queryParams: GetCategoriesIdJsonQueryParams;
}
export declare class GetCategoriesIdJsonResponse extends SpeakeasyBase {
    category?: shared.Category;
    contentType: string;
    notFound?: any;
    statusCode: number;
}
