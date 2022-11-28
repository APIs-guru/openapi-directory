import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutOrdersIdJsonPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutOrdersIdJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PutOrdersIdJsonRequest extends SpeakeasyBase {
    pathParams: PutOrdersIdJsonPathParams;
    queryParams: PutOrdersIdJsonQueryParams;
    request: shared.OrderEdit;
}
export declare class PutOrdersIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    notFound?: any;
    order?: shared.Order;
    statusCode: number;
}
