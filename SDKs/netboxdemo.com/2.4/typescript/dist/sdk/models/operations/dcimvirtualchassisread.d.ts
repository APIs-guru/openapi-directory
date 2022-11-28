import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimVirtualChassisReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimVirtualChassisReadRequest extends SpeakeasyBase {
    pathParams: DcimVirtualChassisReadPathParams;
}
export declare class DcimVirtualChassisReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    virtualChassis?: shared.VirtualChassis;
}
