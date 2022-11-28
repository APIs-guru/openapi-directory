import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMembersPathParams extends SpeakeasyBase {
    conversationId: string;
}
export declare class GetMembers200ApplicationJson extends SpeakeasyBase {
    name: string;
    state: shared.MemberStateEnum;
    userId: string;
    userName: string;
}
export declare class GetMembersRequest extends SpeakeasyBase {
    pathParams: GetMembersPathParams;
}
export declare class GetMembersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getMembers200ApplicationJsonObjects?: GetMembers200ApplicationJson[];
}
