import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerPortsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimPowerPortsReadRequest extends SpeakeasyBase {
    pathParams: DcimPowerPortsReadPathParams;
}
export declare class DcimPowerPortsReadResponse extends SpeakeasyBase {
    contentType: string;
    powerPort?: shared.PowerPort;
    statusCode: number;
}
