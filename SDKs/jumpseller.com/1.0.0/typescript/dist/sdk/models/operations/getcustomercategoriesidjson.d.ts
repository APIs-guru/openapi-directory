import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomerCategoriesIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetCustomerCategoriesIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetCustomerCategoriesIdJsonRequest extends SpeakeasyBase {
    pathParams: GetCustomerCategoriesIdJsonPathParams;
    queryParams: GetCustomerCategoriesIdJsonQueryParams;
}
export declare class GetCustomerCategoriesIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    customerCategory?: shared.CustomerCategory;
    notFound?: any;
    statusCode: number;
}
