import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomersIdFieldsFieldIdPathParams extends SpeakeasyBase {
    fieldId: number;
    id: number;
}
export declare class GetCustomersIdFieldsFieldIdQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetCustomersIdFieldsFieldIdRequest extends SpeakeasyBase {
    pathParams: GetCustomersIdFieldsFieldIdPathParams;
    queryParams: GetCustomersIdFieldsFieldIdQueryParams;
}
export declare class GetCustomersIdFieldsFieldIdResponse extends SpeakeasyBase {
    contentType: string;
    customerAdditionalField?: shared.CustomerAdditionalField;
    notFound?: any;
    statusCode: number;
}
