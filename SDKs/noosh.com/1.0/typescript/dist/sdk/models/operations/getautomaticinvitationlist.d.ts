import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAutomaticInvitationListPathParams extends SpeakeasyBase {
    workgroupId: string;
}
export declare class GetAutomaticInvitationListRequest extends SpeakeasyBase {
    pathParams: GetAutomaticInvitationListPathParams;
}
export declare class GetAutomaticInvitationListResponse extends SpeakeasyBase {
    automaticInvitationsListVo?: any;
    body?: Uint8Array;
    contentType: string;
    httpStatusVo?: any;
    statusCode: number;
}
