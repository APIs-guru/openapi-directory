import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceRolesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimDeviceRolesReadRequest extends SpeakeasyBase {
    pathParams: DcimDeviceRolesReadPathParams;
}
export declare class DcimDeviceRolesReadResponse extends SpeakeasyBase {
    contentType: string;
    deviceRole?: shared.DeviceRole;
    statusCode: number;
}
