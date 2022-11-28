import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceRolesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimDeviceRolesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimDeviceRolesPartialUpdatePathParams;
    request: shared.DeviceRoleInput;
}
export declare class DcimDeviceRolesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    deviceRole?: shared.DeviceRole;
    statusCode: number;
}
