import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomFieldsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetCustomFieldsJsonRequest extends SpeakeasyBase {
    queryParams: GetCustomFieldsJsonQueryParams;
}
export declare class GetCustomFieldsJsonResponse extends SpeakeasyBase {
    contentType: string;
    customFields?: shared.CustomField[];
    statusCode: number;
}
