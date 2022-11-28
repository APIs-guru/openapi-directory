import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamIpAddressesPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamIpAddressesPartialUpdateRequest extends SpeakeasyBase {
    pathParams: IpamIpAddressesPartialUpdatePathParams;
    request: shared.WritableIpAddressInput;
}
export declare class IpamIpAddressesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    ipAddress?: shared.IpAddress;
    statusCode: number;
}
