import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCustomerCategoriesIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteCustomerCategoriesIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class DeleteCustomerCategoriesIdJsonRequest extends SpeakeasyBase {
    pathParams: DeleteCustomerCategoriesIdJsonPathParams;
    queryParams: DeleteCustomerCategoriesIdJsonQueryParams;
}
export declare class DeleteCustomerCategoriesIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    deleteCustomerCategoriesIdJson200ApplicationJsonString?: string;
    notFound?: any;
    statusCode: number;
}
