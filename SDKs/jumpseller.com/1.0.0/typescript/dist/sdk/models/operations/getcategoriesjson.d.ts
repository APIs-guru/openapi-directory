import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCategoriesJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetCategoriesJsonRequest extends SpeakeasyBase {
    queryParams: GetCategoriesJsonQueryParams;
}
export declare class GetCategoriesJsonResponse extends SpeakeasyBase {
    category?: shared.Category;
    contentType: string;
    statusCode: number;
}
