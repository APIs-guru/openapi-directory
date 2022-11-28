import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CidrBlock } from "./cidrblock";



// MasterAuthorizedNetworksConfig
/** 
 * Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
**/
export class MasterAuthorizedNetworksConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cidrBlocks", elemType: CidrBlock })
  cidrBlocks?: CidrBlock[];

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
