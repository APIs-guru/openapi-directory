import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCustomersJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    limit?: number;
    login: string;
    page?: number;
}
export declare class GetCustomersJsonRequest extends SpeakeasyBase {
    queryParams: GetCustomersJsonQueryParams;
}
export declare class GetCustomersJsonResponse extends SpeakeasyBase {
    contentType: string;
    customers?: shared.Customer[];
    statusCode: number;
}
