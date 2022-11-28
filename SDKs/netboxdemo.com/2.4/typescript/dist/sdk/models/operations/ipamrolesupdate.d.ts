import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamRolesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamRolesUpdateRequest extends SpeakeasyBase {
    pathParams: IpamRolesUpdatePathParams;
    request: shared.RoleInput;
}
export declare class IpamRolesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    role?: shared.Role;
    statusCode: number;
}
