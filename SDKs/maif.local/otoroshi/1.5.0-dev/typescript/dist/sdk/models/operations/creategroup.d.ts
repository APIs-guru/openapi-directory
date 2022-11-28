import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateGroupSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class CreateGroupRequest extends SpeakeasyBase {
    request?: shared.Group;
    security: CreateGroupSecurity;
}
export declare class CreateGroupResponse extends SpeakeasyBase {
    contentType: string;
    group?: shared.Group;
    statusCode: number;
}
