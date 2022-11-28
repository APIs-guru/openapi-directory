import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncPlayJoinGroupRequests extends SpeakeasyBase {
    joinGroupRequestDto?: shared.JoinGroupRequestDto;
    joinGroupRequestDto1?: shared.JoinGroupRequestDto;
    joinGroupRequestDto2?: shared.JoinGroupRequestDto;
}
export declare class SyncPlayJoinGroupSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SyncPlayJoinGroupRequest extends SpeakeasyBase {
    request: SyncPlayJoinGroupRequests;
    security: SyncPlayJoinGroupSecurity;
}
export declare class SyncPlayJoinGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
