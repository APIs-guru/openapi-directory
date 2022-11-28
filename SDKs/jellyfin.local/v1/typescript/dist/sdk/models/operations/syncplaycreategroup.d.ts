import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncPlayCreateGroupRequests extends SpeakeasyBase {
    newGroupRequestDto?: shared.NewGroupRequestDto;
    newGroupRequestDto1?: shared.NewGroupRequestDto;
    newGroupRequestDto2?: shared.NewGroupRequestDto;
}
export declare class SyncPlayCreateGroupSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SyncPlayCreateGroupRequest extends SpeakeasyBase {
    request: SyncPlayCreateGroupRequests;
    security: SyncPlayCreateGroupSecurity;
}
export declare class SyncPlayCreateGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
