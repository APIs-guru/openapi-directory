import { SpeakeasyBase } from "../../../internal/utils";
import { SqlAclEntry } from "./sqlaclentry";
/**
 * IP Management configuration.
**/
export declare class SqlIpConfig extends SpeakeasyBase {
    authorizedNetworks?: SqlAclEntry[];
    enableIpv4?: boolean;
    privateNetwork?: string;
    requireSsl?: boolean;
}
