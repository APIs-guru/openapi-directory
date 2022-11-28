import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerPortsTracePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPowerPortsTraceRequest extends SpeakeasyBase {
    pathParams: DcimPowerPortsTracePathParams;
}
export declare class DcimPowerPortsTraceResponse extends SpeakeasyBase {
    contentType: string;
    powerPort?: shared.PowerPort;
    statusCode: number;
}
