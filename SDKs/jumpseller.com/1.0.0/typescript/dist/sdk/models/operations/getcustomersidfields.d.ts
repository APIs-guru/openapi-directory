import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomersIdFieldsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetCustomersIdFieldsQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetCustomersIdFieldsRequest extends SpeakeasyBase {
    pathParams: GetCustomersIdFieldsPathParams;
    queryParams: GetCustomersIdFieldsQueryParams;
}
export declare class GetCustomersIdFieldsResponse extends SpeakeasyBase {
    contentType: string;
    customerAdditionalFields?: shared.CustomerAdditionalField[];
    notFound?: any;
    statusCode: number;
}
