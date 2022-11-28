import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceRolesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimDeviceRolesUpdateRequest extends SpeakeasyBase {
    pathParams: DcimDeviceRolesUpdatePathParams;
    request: shared.DeviceRoleInput;
}
export declare class DcimDeviceRolesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deviceRole?: shared.DeviceRole;
    statusCode: number;
}
