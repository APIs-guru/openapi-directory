import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMemberPathParams extends SpeakeasyBase {
    conversationId: string;
    memberId: string;
}
export declare class GetMemberRequest extends SpeakeasyBase {
    pathParams: GetMemberPathParams;
}
export declare class GetMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getMember200ApplicationJsonAny?: any;
}
