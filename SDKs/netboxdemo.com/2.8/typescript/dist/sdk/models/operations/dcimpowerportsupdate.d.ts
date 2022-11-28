import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerPortsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPowerPortsUpdateRequest extends SpeakeasyBase {
    pathParams: DcimPowerPortsUpdatePathParams;
    request: shared.WritablePowerPortInput;
}
export declare class DcimPowerPortsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    powerPort?: shared.PowerPort;
    statusCode: number;
}
