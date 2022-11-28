import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamVlansCreateRequest extends SpeakeasyBase {
    request: shared.WritableVlanInput;
}
export declare class IpamVlansCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vlan?: shared.Vlan;
}
