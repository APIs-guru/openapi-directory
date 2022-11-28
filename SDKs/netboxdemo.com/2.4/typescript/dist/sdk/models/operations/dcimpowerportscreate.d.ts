import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerPortsCreateRequest extends SpeakeasyBase {
    request: shared.WritablePowerPortInput;
}
export declare class DcimPowerPortsCreateResponse extends SpeakeasyBase {
    contentType: string;
    powerPort?: shared.PowerPort;
    statusCode: number;
}
