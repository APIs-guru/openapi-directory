import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCustomFieldsIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutCustomFieldsIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PutCustomFieldsIdJsonRequest extends SpeakeasyBase {
    pathParams: PutCustomFieldsIdJsonPathParams;
    queryParams: PutCustomFieldsIdJsonQueryParams;
    request: shared.CustomFieldEdit;
}
export declare class PutCustomFieldsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    customField?: shared.CustomField;
    notFound?: any;
    statusCode: number;
}
