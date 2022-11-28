import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRearPortsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimRearPortsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimRearPortsPartialUpdatePathParams;
    request: shared.WritableRearPortInput;
}
export declare class DcimRearPortsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    rearPort?: shared.RearPort;
    statusCode: number;
}
