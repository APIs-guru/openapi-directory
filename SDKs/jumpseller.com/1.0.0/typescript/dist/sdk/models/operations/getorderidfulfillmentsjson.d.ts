import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrderIdFulfillmentsJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetOrderIdFulfillmentsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetOrderIdFulfillmentsJsonRequest extends SpeakeasyBase {
    pathParams: GetOrderIdFulfillmentsJsonPathParams;
    queryParams: GetOrderIdFulfillmentsJsonQueryParams;
}
export declare class GetOrderIdFulfillmentsJsonResponse extends SpeakeasyBase {
    contentType: string;
    fulfillments?: shared.Fulfillment[];
    notFound?: any;
    statusCode: number;
}
