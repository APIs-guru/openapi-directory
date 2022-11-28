import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateGroupPathParams extends SpeakeasyBase {
    serviceGroupId: string;
}
export declare class UpdateGroupSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class UpdateGroupRequest extends SpeakeasyBase {
    pathParams: UpdateGroupPathParams;
    request?: shared.Group;
    security: UpdateGroupSecurity;
}
export declare class UpdateGroupResponse extends SpeakeasyBase {
    contentType: string;
    group?: shared.Group;
    statusCode: number;
}
