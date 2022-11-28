import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCategoriesJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostCategoriesJsonRequest extends SpeakeasyBase {
    queryParams: PostCategoriesJsonQueryParams;
    request: shared.CategoryEdit;
}
export declare class PostCategoriesJsonResponse extends SpeakeasyBase {
    category?: shared.Category;
    contentType: string;
    statusCode: number;
}
