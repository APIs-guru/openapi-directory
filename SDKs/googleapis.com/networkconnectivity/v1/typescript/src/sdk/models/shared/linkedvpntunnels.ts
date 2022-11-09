import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LinkedVpnTunnels
/** 
 * A collection of Cloud VPN tunnel resources. These resources should be redundant HA VPN tunnels that all advertise the same prefixes to Google Cloud. Alternatively, in a passive/active configuration, all tunnels should be capable of advertising the same prefixes.
**/
export class LinkedVpnTunnels extends SpeakeasyBase {
  @Metadata({ data: "json, name=siteToSiteDataTransfer" })
  siteToSiteDataTransfer?: boolean;

  @Metadata({ data: "json, name=uris" })
  uris?: string[];
}
