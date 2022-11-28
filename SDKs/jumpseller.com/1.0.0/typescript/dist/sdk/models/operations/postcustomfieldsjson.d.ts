import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCustomFieldsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostCustomFieldsJsonRequest extends SpeakeasyBase {
    queryParams: PostCustomFieldsJsonQueryParams;
    request: shared.CustomFieldEdit;
}
export declare class PostCustomFieldsJsonResponse extends SpeakeasyBase {
    contentType: string;
    customField?: shared.CustomField;
    statusCode: number;
}
