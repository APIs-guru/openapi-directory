import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamIpAddressesReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class IpamIpAddressesReadRequest extends SpeakeasyBase {
    pathParams: IpamIpAddressesReadPathParams;
}
export declare class IpamIpAddressesReadResponse extends SpeakeasyBase {
    contentType: string;
    ipAddress?: shared.IpAddress;
    statusCode: number;
}
