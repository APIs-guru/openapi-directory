import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrdersIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetOrdersIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetOrdersIdJsonRequest extends SpeakeasyBase {
    pathParams: GetOrdersIdJsonPathParams;
    queryParams: GetOrdersIdJsonQueryParams;
}
export declare class GetOrdersIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    order?: shared.Order;
    statusCode: number;
}
