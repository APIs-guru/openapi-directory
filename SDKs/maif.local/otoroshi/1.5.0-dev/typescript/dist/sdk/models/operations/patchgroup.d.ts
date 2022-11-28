import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PatchGroupPathParams extends SpeakeasyBase {
    serviceGroupId: string;
}
export declare class PatchGroupSecurity extends SpeakeasyBase {
    otoroshiAuth: shared.SchemeOtoroshiAuth;
}
export declare class PatchGroupRequest extends SpeakeasyBase {
    pathParams: PatchGroupPathParams;
    request?: shared.Patch[];
    security: PatchGroupSecurity;
}
export declare class PatchGroupResponse extends SpeakeasyBase {
    contentType: string;
    group?: shared.Group;
    statusCode: number;
}
