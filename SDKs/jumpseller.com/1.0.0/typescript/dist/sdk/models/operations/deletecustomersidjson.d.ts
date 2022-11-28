import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCustomersIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteCustomersIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class DeleteCustomersIdJsonRequest extends SpeakeasyBase {
    pathParams: DeleteCustomersIdJsonPathParams;
    queryParams: DeleteCustomersIdJsonQueryParams;
}
export declare class DeleteCustomersIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    deleteCustomersIdJson200ApplicationJsonString?: string;
    notFound?: any;
    statusCode: number;
}
