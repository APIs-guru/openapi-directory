import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomersIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetCustomersIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetCustomersIdJsonRequest extends SpeakeasyBase {
    pathParams: GetCustomersIdJsonPathParams;
    queryParams: GetCustomersIdJsonQueryParams;
}
export declare class GetCustomersIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    customer?: shared.Customer;
    notFound?: any;
    statusCode: number;
}
