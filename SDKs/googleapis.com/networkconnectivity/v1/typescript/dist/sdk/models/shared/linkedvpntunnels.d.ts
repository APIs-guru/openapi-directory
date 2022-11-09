import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A collection of Cloud VPN tunnel resources. These resources should be redundant HA VPN tunnels that all advertise the same prefixes to Google Cloud. Alternatively, in a passive/active configuration, all tunnels should be capable of advertising the same prefixes.
**/
export declare class LinkedVpnTunnels extends SpeakeasyBase {
    siteToSiteDataTransfer?: boolean;
    uris?: string[];
}
