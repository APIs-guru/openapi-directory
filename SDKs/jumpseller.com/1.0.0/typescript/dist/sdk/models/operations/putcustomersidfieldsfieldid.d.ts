import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCustomersIdFieldsFieldIdPathParams extends SpeakeasyBase {
    fieldId: number;
    id: number;
}
export declare class PutCustomersIdFieldsFieldIdQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PutCustomersIdFieldsFieldIdRequest extends SpeakeasyBase {
    pathParams: PutCustomersIdFieldsFieldIdPathParams;
    queryParams: PutCustomersIdFieldsFieldIdQueryParams;
    request: shared.CustomerAdditionalFieldEdit;
}
export declare class PutCustomersIdFieldsFieldIdResponse extends SpeakeasyBase {
    badParams?: any;
    contentType: string;
    customerAdditionalField?: shared.CustomerAdditionalField;
    notFound?: any;
    statusCode: number;
}
