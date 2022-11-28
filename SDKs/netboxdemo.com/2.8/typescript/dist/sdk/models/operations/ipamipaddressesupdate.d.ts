import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamIpAddressesUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamIpAddressesUpdateRequest extends SpeakeasyBase {
    pathParams: IpamIpAddressesUpdatePathParams;
    request: shared.WritableIpAddressInput;
}
export declare class IpamIpAddressesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    ipAddress?: shared.IpAddress;
    statusCode: number;
}
