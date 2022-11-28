import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCustomerCategoriesIdCustomersJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteCustomerCategoriesIdCustomersJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class DeleteCustomerCategoriesIdCustomersJsonRequest extends SpeakeasyBase {
    pathParams: DeleteCustomerCategoriesIdCustomersJsonPathParams;
    queryParams: DeleteCustomerCategoriesIdCustomersJsonQueryParams;
    request: shared.CustomersToCustomerCategory;
}
export declare class DeleteCustomerCategoriesIdCustomersJsonResponse extends SpeakeasyBase {
    contentType: string;
    deleteCustomerCategoriesIdCustomersJson200ApplicationJsonString?: string;
    notFound?: any;
    statusCode: number;
}
