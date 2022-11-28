import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams extends SpeakeasyBase {
    customFieldSelectOptionId: number;
    id: number;
}
export declare class GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest extends SpeakeasyBase {
    pathParams: GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams;
    queryParams: GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams;
}
export declare class GetCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    customFieldSelectOption?: shared.CustomFieldSelectOption;
    notFound?: any;
    statusCode: number;
}
