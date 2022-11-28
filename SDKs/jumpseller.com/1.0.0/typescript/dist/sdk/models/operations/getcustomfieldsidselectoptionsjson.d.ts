import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomFieldsIdSelectOptionsJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetCustomFieldsIdSelectOptionsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetCustomFieldsIdSelectOptionsJsonRequest extends SpeakeasyBase {
    pathParams: GetCustomFieldsIdSelectOptionsJsonPathParams;
    queryParams: GetCustomFieldsIdSelectOptionsJsonQueryParams;
}
export declare class GetCustomFieldsIdSelectOptionsJsonResponse extends SpeakeasyBase {
    contentType: string;
    customFieldSelectOptions?: shared.CustomFieldSelectOption[];
    statusCode: number;
}
