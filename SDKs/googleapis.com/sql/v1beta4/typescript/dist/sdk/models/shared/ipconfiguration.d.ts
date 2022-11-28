import { SpeakeasyBase } from "../../../internal/utils";
import { AclEntry } from "./aclentry";
/**
 * IP Management configuration.
**/
export declare class IpConfiguration extends SpeakeasyBase {
    allocatedIpRange?: string;
    authorizedNetworks?: AclEntry[];
    ipv4Enabled?: boolean;
    privateNetwork?: string;
    requireSsl?: boolean;
}
