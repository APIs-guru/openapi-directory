import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams extends SpeakeasyBase {
    customFieldSelectOptionId: number;
    id: number;
}
export declare class PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest extends SpeakeasyBase {
    pathParams: PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonPathParams;
    queryParams: PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonQueryParams;
    request: shared.CustomFieldSelectOptionEdit;
}
export declare class PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    customFieldSelectOption?: shared.CustomFieldSelectOption;
    notFound?: any;
    statusCode: number;
}
