import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomersEmailEmailJsonPathParams extends SpeakeasyBase {
    email: string;
}
export declare class GetCustomersEmailEmailJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetCustomersEmailEmailJsonRequest extends SpeakeasyBase {
    pathParams: GetCustomersEmailEmailJsonPathParams;
    queryParams: GetCustomersEmailEmailJsonQueryParams;
}
export declare class GetCustomersEmailEmailJsonResponse extends SpeakeasyBase {
    contentType: string;
    customer?: shared.Customer;
    notFound?: any;
    statusCode: number;
}
