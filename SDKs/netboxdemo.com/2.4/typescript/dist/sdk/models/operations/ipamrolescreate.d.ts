import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamRolesCreateRequest extends SpeakeasyBase {
    request: shared.RoleInput;
}
export declare class IpamRolesCreateResponse extends SpeakeasyBase {
    contentType: string;
    role?: shared.Role;
    statusCode: number;
}
