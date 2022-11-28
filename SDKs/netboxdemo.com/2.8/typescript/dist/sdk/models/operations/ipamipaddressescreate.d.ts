import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class IpamIpAddressesCreateRequest extends SpeakeasyBase {
    request: shared.WritableIpAddressInput;
}
export declare class IpamIpAddressesCreateResponse extends SpeakeasyBase {
    contentType: string;
    ipAddress?: shared.IpAddress;
    statusCode: number;
}
