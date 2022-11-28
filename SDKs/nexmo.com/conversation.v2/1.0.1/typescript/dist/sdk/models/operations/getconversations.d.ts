import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetConversationsQueryParams extends SpeakeasyBase {
    cursor?: string;
    dateEnd?: string;
    dateStart?: string;
    order?: shared.OrderEnum;
    pageSize?: number;
}
export declare class GetConversationsRequest extends SpeakeasyBase {
    queryParams: GetConversationsQueryParams;
}
export declare class GetConversationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getConversations200ApplicationJsonAny?: any;
}
