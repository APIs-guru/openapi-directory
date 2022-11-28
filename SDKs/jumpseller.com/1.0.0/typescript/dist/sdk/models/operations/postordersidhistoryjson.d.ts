import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostOrdersIdHistoryJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PostOrdersIdHistoryJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostOrdersIdHistoryJsonRequest extends SpeakeasyBase {
    pathParams: PostOrdersIdHistoryJsonPathParams;
    queryParams: PostOrdersIdHistoryJsonQueryParams;
    request: shared.OrderHistoryEdit;
}
export declare class PostOrdersIdHistoryJsonResponse extends SpeakeasyBase {
    contentType: string;
    orderHistory?: shared.OrderHistory;
    statusCode: number;
}
