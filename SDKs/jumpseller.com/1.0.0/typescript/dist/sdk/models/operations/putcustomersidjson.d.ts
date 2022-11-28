import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutCustomersIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutCustomersIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PutCustomersIdJsonRequest extends SpeakeasyBase {
    pathParams: PutCustomersIdJsonPathParams;
    queryParams: PutCustomersIdJsonQueryParams;
    request: shared.CustomerWithPasswordNoId;
}
export declare class PutCustomersIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    customer?: shared.Customer;
    notFound?: any;
    statusCode: number;
}
