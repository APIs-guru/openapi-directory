import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateMemberPathParams extends SpeakeasyBase {
    conversationId: string;
}
/**
 * Create a Member in invite state
**/
export declare class CreateMemberRequestBody extends SpeakeasyBase {
    action?: shared.MemberActionEnum;
    channel: shared.Channel;
    knockingId?: string;
    media?: Map<string, any>;
    memberId?: string;
    memberIdInviting?: string;
    userId: string;
}
export declare class CreateMember201ApplicationJson extends SpeakeasyBase {
    channel?: shared.Channel;
    href?: string;
    id?: string;
    initiator?: shared.Initiator;
    state?: shared.MemberStateEnum;
    timestamp?: shared.TimestampResMember;
    userId?: string;
}
export declare class CreateMemberRequest extends SpeakeasyBase {
    pathParams: CreateMemberPathParams;
    request?: CreateMemberRequestBody;
}
export declare class CreateMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createMember201ApplicationJsonObject?: CreateMember201ApplicationJson;
}
