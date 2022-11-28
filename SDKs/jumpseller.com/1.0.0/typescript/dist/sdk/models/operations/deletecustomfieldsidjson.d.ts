import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCustomFieldsIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteCustomFieldsIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class DeleteCustomFieldsIdJsonRequest extends SpeakeasyBase {
    pathParams: DeleteCustomFieldsIdJsonPathParams;
    queryParams: DeleteCustomFieldsIdJsonQueryParams;
}
export declare class DeleteCustomFieldsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    deleteCustomFieldsIdJson200ApplicationJsonString?: string;
    notFound?: any;
    statusCode: number;
}
