import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SyncPlayLeaveGroupSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class SyncPlayLeaveGroupRequest extends SpeakeasyBase {
    security: SyncPlayLeaveGroupSecurity;
}
export declare class SyncPlayLeaveGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
