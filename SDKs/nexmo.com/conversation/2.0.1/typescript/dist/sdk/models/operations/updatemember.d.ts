import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateMemberPathParams extends SpeakeasyBase {
    conversationId: string;
    memberId: string;
}
export declare class UpdateMemberRequest extends SpeakeasyBase {
    pathParams: UpdateMemberPathParams;
    request?: any;
}
export declare class UpdateMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateMember200ApplicationJsonAny?: any;
}
