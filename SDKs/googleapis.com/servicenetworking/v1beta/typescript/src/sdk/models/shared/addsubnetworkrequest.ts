import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddSubnetworkRequest
/** 
 * Request to create a subnetwork in a previously peered service network.
**/
export class AddSubnetworkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumer" })
  consumer?: string;

  @SpeakeasyMetadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ipPrefixLength" })
  ipPrefixLength?: number;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=requestedAddress" })
  requestedAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=subnetwork" })
  subnetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=subnetworkUsers" })
  subnetworkUsers?: string[];
}
