import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimVirtualChassisCreateRequest extends SpeakeasyBase {
    request: shared.WritableVirtualChassisInput;
}
export declare class DcimVirtualChassisCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    virtualChassis?: shared.VirtualChassis;
}
