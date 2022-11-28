import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamRolesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamRolesReadRequest extends SpeakeasyBase {
    pathParams: IpamRolesReadPathParams;
}
export declare class IpamRolesReadResponse extends SpeakeasyBase {
    contentType: string;
    role?: shared.Role;
    statusCode: number;
}
