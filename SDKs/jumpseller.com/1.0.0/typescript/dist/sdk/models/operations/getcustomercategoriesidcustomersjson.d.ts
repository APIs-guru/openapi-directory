import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomerCategoriesIdCustomersJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetCustomerCategoriesIdCustomersJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetCustomerCategoriesIdCustomersJsonRequest extends SpeakeasyBase {
    pathParams: GetCustomerCategoriesIdCustomersJsonPathParams;
    queryParams: GetCustomerCategoriesIdCustomersJsonQueryParams;
}
export declare class GetCustomerCategoriesIdCustomersJsonResponse extends SpeakeasyBase {
    contentType: string;
    customers?: shared.Customer[];
    notFound?: any;
    statusCode: number;
}
