import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SecondaryIpRangeSpec } from "./secondaryiprangespec";


// AddSubnetworkRequest
/** 
 * Request to create a subnetwork in a previously peered service network.
**/
export class AddSubnetworkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=checkServiceNetworkingUsePermission" })
  checkServiceNetworkingUsePermission?: boolean;

  @Metadata({ data: "json, name=computeIdempotencyWindow" })
  computeIdempotencyWindow?: string;

  @Metadata({ data: "json, name=consumer" })
  consumer?: string;

  @Metadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=ipPrefixLength" })
  ipPrefixLength?: number;

  @Metadata({ data: "json, name=outsideAllocationPublicIpRange" })
  outsideAllocationPublicIpRange?: string;

  @Metadata({ data: "json, name=privateIpv6GoogleAccess" })
  privateIpv6GoogleAccess?: string;

  @Metadata({ data: "json, name=purpose" })
  purpose?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=requestedAddress" })
  requestedAddress?: string;

  @Metadata({ data: "json, name=requestedRanges" })
  requestedRanges?: string[];

  @Metadata({ data: "json, name=secondaryIpRangeSpecs", elemType: shared.SecondaryIpRangeSpec })
  secondaryIpRangeSpecs?: SecondaryIpRangeSpec[];

  @Metadata({ data: "json, name=subnetwork" })
  subnetwork?: string;

  @Metadata({ data: "json, name=subnetworkUsers" })
  subnetworkUsers?: string[];

  @Metadata({ data: "json, name=useCustomComputeIdempotencyWindow" })
  useCustomComputeIdempotencyWindow?: boolean;
}
