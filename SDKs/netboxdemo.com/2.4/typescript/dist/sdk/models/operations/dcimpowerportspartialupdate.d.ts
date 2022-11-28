import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerPortsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPowerPortsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimPowerPortsPartialUpdatePathParams;
    request: shared.WritablePowerPortInput;
}
export declare class DcimPowerPortsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    powerPort?: shared.PowerPort;
    statusCode: number;
}
