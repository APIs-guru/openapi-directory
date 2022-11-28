import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AclEntry } from "./aclentry";



// IpConfiguration
/** 
 * IP Management configuration.
**/
export class IpConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allocatedIpRange" })
  allocatedIpRange?: string;

  @SpeakeasyMetadata({ data: "json, name=authorizedNetworks", elemType: AclEntry })
  authorizedNetworks?: AclEntry[];

  @SpeakeasyMetadata({ data: "json, name=ipv4Enabled" })
  ipv4Enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=privateNetwork" })
  privateNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=requireSsl" })
  requireSsl?: boolean;
}
