import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamVlansPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamVlansPartialUpdateRequest extends SpeakeasyBase {
    pathParams: IpamVlansPartialUpdatePathParams;
    request: shared.WritableVlanInput;
}
export declare class IpamVlansPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vlan?: shared.Vlan;
}
