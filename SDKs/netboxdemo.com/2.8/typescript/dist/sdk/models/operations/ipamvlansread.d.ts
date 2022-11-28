import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamVlansReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamVlansReadRequest extends SpeakeasyBase {
    pathParams: IpamVlansReadPathParams;
}
export declare class IpamVlansReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    vlan?: shared.Vlan;
}
