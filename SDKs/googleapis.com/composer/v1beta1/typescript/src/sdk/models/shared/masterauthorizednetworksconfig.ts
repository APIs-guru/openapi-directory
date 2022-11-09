import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CidrBlock } from "./cidrblock";


// MasterAuthorizedNetworksConfig
/** 
 * Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
**/
export class MasterAuthorizedNetworksConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=cidrBlocks", elemType: shared.CidrBlock })
  cidrBlocks?: CidrBlock[];

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}
