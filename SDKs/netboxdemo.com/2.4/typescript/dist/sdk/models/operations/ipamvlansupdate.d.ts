import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamVlansUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamVlansUpdateRequest extends SpeakeasyBase {
    pathParams: IpamVlansUpdatePathParams;
    request: shared.WritableVlanInput;
}
export declare class IpamVlansUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vlan?: shared.Vlan;
}
