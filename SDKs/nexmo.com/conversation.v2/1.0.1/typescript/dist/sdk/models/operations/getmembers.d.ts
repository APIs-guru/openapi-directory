import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMembersPathParams extends SpeakeasyBase {
    conversationId: string;
}
export declare class GetMembersQueryParams extends SpeakeasyBase {
    cursor?: string;
    order?: shared.OrderEnum;
    pageSize?: number;
}
export declare class GetMembersRequest extends SpeakeasyBase {
    pathParams: GetMembersPathParams;
    queryParams: GetMembersQueryParams;
}
export declare class GetMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getMembers200ApplicationJsonAny?: any;
}
