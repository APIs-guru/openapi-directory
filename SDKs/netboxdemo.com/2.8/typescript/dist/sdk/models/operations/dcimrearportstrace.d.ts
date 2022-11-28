import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRearPortsTracePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRearPortsTraceRequest extends SpeakeasyBase {
    pathParams: DcimRearPortsTracePathParams;
}
export declare class DcimRearPortsTraceResponse extends SpeakeasyBase {
    contentType: string;
    rearPort?: shared.RearPort;
    statusCode: number;
}
