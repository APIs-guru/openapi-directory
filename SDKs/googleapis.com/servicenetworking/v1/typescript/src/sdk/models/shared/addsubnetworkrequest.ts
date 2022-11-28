import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecondaryIpRangeSpec } from "./secondaryiprangespec";



// AddSubnetworkRequest
/** 
 * Request to create a subnetwork in a previously peered service network.
**/
export class AddSubnetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=checkServiceNetworkingUsePermission" })
  checkServiceNetworkingUsePermission?: boolean;

  @SpeakeasyMetadata({ data: "json, name=computeIdempotencyWindow" })
  computeIdempotencyWindow?: string;

  @SpeakeasyMetadata({ data: "json, name=consumer" })
  consumer?: string;

  @SpeakeasyMetadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ipPrefixLength" })
  ipPrefixLength?: number;

  @SpeakeasyMetadata({ data: "json, name=outsideAllocationPublicIpRange" })
  outsideAllocationPublicIpRange?: string;

  @SpeakeasyMetadata({ data: "json, name=privateIpv6GoogleAccess" })
  privateIpv6GoogleAccess?: string;

  @SpeakeasyMetadata({ data: "json, name=purpose" })
  purpose?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedAddress" })
  requestedAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedRanges" })
  requestedRanges?: string[];

  @SpeakeasyMetadata({ data: "json, name=secondaryIpRangeSpecs", elemType: SecondaryIpRangeSpec })
  secondaryIpRangeSpecs?: SecondaryIpRangeSpec[];

  @SpeakeasyMetadata({ data: "json, name=subnetwork" })
  subnetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=subnetworkUsers" })
  subnetworkUsers?: string[];

  @SpeakeasyMetadata({ data: "json, name=useCustomComputeIdempotencyWindow" })
  useCustomComputeIdempotencyWindow?: boolean;
}
