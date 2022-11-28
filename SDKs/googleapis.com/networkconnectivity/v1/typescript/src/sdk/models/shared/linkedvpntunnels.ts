import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LinkedVpnTunnelsInput
/** 
 * A collection of Cloud VPN tunnel resources. These resources should be redundant HA VPN tunnels that all advertise the same prefixes to Google Cloud. Alternatively, in a passive/active configuration, all tunnels should be capable of advertising the same prefixes.
**/
export class LinkedVpnTunnelsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=siteToSiteDataTransfer" })
  siteToSiteDataTransfer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=uris" })
  uris?: string[];
}


// LinkedVpnTunnels
/** 
 * A collection of Cloud VPN tunnel resources. These resources should be redundant HA VPN tunnels that all advertise the same prefixes to Google Cloud. Alternatively, in a passive/active configuration, all tunnels should be capable of advertising the same prefixes.
**/
export class LinkedVpnTunnels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=siteToSiteDataTransfer" })
  siteToSiteDataTransfer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=uris" })
  uris?: string[];

  @SpeakeasyMetadata({ data: "json, name=vpcNetwork" })
  vpcNetwork?: string;
}
