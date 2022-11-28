import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRecordingGroupPathParams extends SpeakeasyBase {
    groupId: string;
}
export declare class GetRecordingGroupSecurity extends SpeakeasyBase {
    customAuthentication: shared.SchemeCustomAuthentication;
}
export declare class GetRecordingGroupRequest extends SpeakeasyBase {
    pathParams: GetRecordingGroupPathParams;
    security: GetRecordingGroupSecurity;
}
export declare class GetRecordingGroupResponse extends SpeakeasyBase {
    contentType: string;
    problemDetails?: Map<string, any>;
    statusCode: number;
}
