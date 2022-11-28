import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimConnectedDeviceListQueryParams extends SpeakeasyBase {
    peerDevice: string;
    peerInterface: string;
}
export declare class DcimConnectedDeviceListRequest extends SpeakeasyBase {
    queryParams: DcimConnectedDeviceListQueryParams;
}
export declare class DcimConnectedDeviceListResponse extends SpeakeasyBase {
    contentType: string;
    device?: shared.Device;
    statusCode: number;
}
