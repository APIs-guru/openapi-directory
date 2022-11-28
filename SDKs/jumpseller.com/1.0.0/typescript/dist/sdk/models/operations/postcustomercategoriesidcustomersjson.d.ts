import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCustomerCategoriesIdCustomersJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostCustomerCategoriesIdCustomersJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostCustomerCategoriesIdCustomersJsonRequest extends SpeakeasyBase {
    pathParams: PostCustomerCategoriesIdCustomersJsonPathParams;
    queryParams: PostCustomerCategoriesIdCustomersJsonQueryParams;
    request: shared.CustomersToCustomerCategory;
}
export declare class PostCustomerCategoriesIdCustomersJsonResponse extends SpeakeasyBase {
    contentType: string;
    customers?: shared.Customer[];
    notFound?: any;
    statusCode: number;
}
