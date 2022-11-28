import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostOrdersJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostOrdersJsonRequest extends SpeakeasyBase {
    queryParams: PostOrdersJsonQueryParams;
    request: shared.OrderCreate;
}
export declare class PostOrdersJsonResponse extends SpeakeasyBase {
    contentType: string;
    order?: shared.Order;
    statusCode: number;
}
