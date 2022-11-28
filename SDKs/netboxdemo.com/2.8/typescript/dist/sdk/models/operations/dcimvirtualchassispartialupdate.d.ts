import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimVirtualChassisPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimVirtualChassisPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimVirtualChassisPartialUpdatePathParams;
    request: shared.WritableVirtualChassisInput;
}
export declare class DcimVirtualChassisPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    virtualChassis?: shared.VirtualChassis;
}
