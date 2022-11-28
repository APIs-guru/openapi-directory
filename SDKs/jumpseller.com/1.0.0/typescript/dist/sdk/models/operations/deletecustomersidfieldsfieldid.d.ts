import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteCustomersIdFieldsFieldIdPathParams extends SpeakeasyBase {
    fieldId: number;
    id: number;
}
export declare class DeleteCustomersIdFieldsFieldIdQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class DeleteCustomersIdFieldsFieldIdRequest extends SpeakeasyBase {
    pathParams: DeleteCustomersIdFieldsFieldIdPathParams;
    queryParams: DeleteCustomersIdFieldsFieldIdQueryParams;
}
export declare class DeleteCustomersIdFieldsFieldIdResponse extends SpeakeasyBase {
    contentType: string;
    deleteCustomersIdFieldsFieldId200ApplicationJsonString?: string;
    notFound?: any;
    statusCode: number;
}
