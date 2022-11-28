import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCustomerCategoriesJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostCustomerCategoriesJsonRequest extends SpeakeasyBase {
    queryParams: PostCustomerCategoriesJsonQueryParams;
    request: shared.CustomerCategoryEdit;
}
export declare class PostCustomerCategoriesJsonResponse extends SpeakeasyBase {
    contentType: string;
    customerCategory?: shared.CustomerCategory;
    notFound?: any;
    statusCode: number;
}
