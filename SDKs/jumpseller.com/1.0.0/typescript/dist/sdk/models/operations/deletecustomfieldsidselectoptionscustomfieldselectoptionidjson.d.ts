import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams extends SpeakeasyBase {
    customFieldSelectOptionId: number;
    id: number;
}
export declare class DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest extends SpeakeasyBase {
    pathParams: DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams;
    queryParams: DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams;
}
export declare class DeleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    deleteCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJson200ApplicationJsonString?: string;
    notFound?: any;
    statusCode: number;
}
