import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRearPortsCreateRequest extends SpeakeasyBase {
    request: shared.WritableRearPortInput;
}
export declare class DcimRearPortsCreateResponse extends SpeakeasyBase {
    contentType: string;
    rearPort?: shared.RearPort;
    statusCode: number;
}
