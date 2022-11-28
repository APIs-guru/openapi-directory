import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFulfillmentsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    limit?: number;
    login: string;
    page?: number;
}
export declare class GetFulfillmentsJsonRequest extends SpeakeasyBase {
    queryParams: GetFulfillmentsJsonQueryParams;
}
export declare class GetFulfillmentsJsonResponse extends SpeakeasyBase {
    contentType: string;
    fulfillments?: shared.Fulfillment[];
    statusCode: number;
}
