import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRearPortsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRearPortsReadRequest extends SpeakeasyBase {
    pathParams: DcimRearPortsReadPathParams;
}
export declare class DcimRearPortsReadResponse extends SpeakeasyBase {
    contentType: string;
    rearPort?: shared.RearPort;
    statusCode: number;
}
