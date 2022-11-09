import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AclEntry } from "./aclentry";


// IpConfiguration
/** 
 * IP Management configuration.
**/
export class IpConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=allocatedIpRange" })
  allocatedIpRange?: string;

  @Metadata({ data: "json, name=authorizedNetworks", elemType: shared.AclEntry })
  authorizedNetworks?: AclEntry[];

  @Metadata({ data: "json, name=ipv4Enabled" })
  ipv4Enabled?: boolean;

  @Metadata({ data: "json, name=privateNetwork" })
  privateNetwork?: string;

  @Metadata({ data: "json, name=requireSsl" })
  requireSsl?: boolean;
}
