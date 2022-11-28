import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCustomFieldsIdSelectOptionsJsonPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostCustomFieldsIdSelectOptionsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostCustomFieldsIdSelectOptionsJsonRequest extends SpeakeasyBase {
    pathParams: PostCustomFieldsIdSelectOptionsJsonPathParams;
    queryParams: PostCustomFieldsIdSelectOptionsJsonQueryParams;
    request: shared.CustomFieldSelectOptionEdit;
}
export declare class PostCustomFieldsIdSelectOptionsJsonResponse extends SpeakeasyBase {
    contentType: string;
    customFieldSelectOption?: shared.CustomFieldSelectOption;
    statusCode: number;
}
