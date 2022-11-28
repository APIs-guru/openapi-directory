import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimVirtualChassisUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimVirtualChassisUpdateRequest extends SpeakeasyBase {
    pathParams: DcimVirtualChassisUpdatePathParams;
    request: shared.WritableVirtualChassisInput;
}
export declare class DcimVirtualChassisUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    virtualChassis?: shared.VirtualChassis;
}
