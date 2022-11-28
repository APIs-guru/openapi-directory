import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRearPortsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRearPortsUpdateRequest extends SpeakeasyBase {
    pathParams: DcimRearPortsUpdatePathParams;
    request: shared.WritableRearPortInput;
}
export declare class DcimRearPortsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    rearPort?: shared.RearPort;
    statusCode: number;
}
