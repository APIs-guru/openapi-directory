import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrdersIdHistoryJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetOrdersIdHistoryJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetOrdersIdHistoryJsonRequest extends SpeakeasyBase {
    pathParams: GetOrdersIdHistoryJsonPathParams;
    queryParams: GetOrdersIdHistoryJsonQueryParams;
}
export declare class GetOrdersIdHistoryJsonResponse extends SpeakeasyBase {
    contentType: string;
    orderHistories?: shared.OrderHistory[];
    statusCode: number;
}
