import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrdersAfterIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetOrdersAfterIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetOrdersAfterIdJsonRequest extends SpeakeasyBase {
    pathParams: GetOrdersAfterIdJsonPathParams;
    queryParams: GetOrdersAfterIdJsonQueryParams;
}
export declare class GetOrdersAfterIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    order?: shared.Order;
    statusCode: number;
}
