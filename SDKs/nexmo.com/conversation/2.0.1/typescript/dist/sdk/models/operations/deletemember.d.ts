import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteMemberPathParams extends SpeakeasyBase {
    conversationId: string;
    memberId: string;
}
export declare class DeleteMemberRequest extends SpeakeasyBase {
    pathParams: DeleteMemberPathParams;
}
export declare class DeleteMemberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteMember200ApplicationJsonObject?: Map<string, any>;
}
