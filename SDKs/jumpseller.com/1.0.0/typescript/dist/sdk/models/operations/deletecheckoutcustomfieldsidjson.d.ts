import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCheckoutCustomFieldsIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteCheckoutCustomFieldsIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class DeleteCheckoutCustomFieldsIdJsonRequest extends SpeakeasyBase {
    pathParams: DeleteCheckoutCustomFieldsIdJsonPathParams;
    queryParams: DeleteCheckoutCustomFieldsIdJsonQueryParams;
}
export declare class DeleteCheckoutCustomFieldsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    deleteCheckoutCustomFieldsIdJson200ApplicationJsonString?: string;
    notFound?: any;
    statusCode: number;
}
