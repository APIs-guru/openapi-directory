import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceRolesCreateRequest extends SpeakeasyBase {
    request: shared.DeviceRoleInput;
}
export declare class DcimDeviceRolesCreateResponse extends SpeakeasyBase {
    contentType: string;
    deviceRole?: shared.DeviceRole;
    statusCode: number;
}
