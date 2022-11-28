import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamRolesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamRolesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: IpamRolesPartialUpdatePathParams;
    request: shared.RoleInput;
}
export declare class IpamRolesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    role?: shared.Role;
    statusCode: number;
}
