import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDevicesGraphsPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimDevicesGraphsRequest extends SpeakeasyBase {
    pathParams: DcimDevicesGraphsPathParams;
}
export declare class DcimDevicesGraphsResponse extends SpeakeasyBase {
    contentType: string;
    deviceWithConfigContext?: shared.DeviceWithConfigContext;
    statusCode: number;
}
