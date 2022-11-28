import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetOrdersJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    limit?: number;
    login: string;
    page?: number;
}
export declare class GetOrdersJsonRequest extends SpeakeasyBase {
    queryParams: GetOrdersJsonQueryParams;
}
export declare class GetOrdersJsonResponse extends SpeakeasyBase {
    contentType: string;
    orders?: shared.Order[];
    statusCode: number;
}
