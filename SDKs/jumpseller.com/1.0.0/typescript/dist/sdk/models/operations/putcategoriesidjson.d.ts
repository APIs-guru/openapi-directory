import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCategoriesIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutCategoriesIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PutCategoriesIdJsonRequest extends SpeakeasyBase {
    pathParams: PutCategoriesIdJsonPathParams;
    queryParams: PutCategoriesIdJsonQueryParams;
    request: shared.CategoryEdit;
}
export declare class PutCategoriesIdJsonResponse extends SpeakeasyBase {
    category?: shared.Category;
    contentType: string;
    notFound?: any;
    statusCode: number;
}
