import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomFieldsIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetCustomFieldsIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetCustomFieldsIdJsonRequest extends SpeakeasyBase {
    pathParams: GetCustomFieldsIdJsonPathParams;
    queryParams: GetCustomFieldsIdJsonQueryParams;
}
export declare class GetCustomFieldsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    customField?: shared.CustomField;
    notFound?: any;
    statusCode: number;
}
