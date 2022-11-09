import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AddSubnetworkRequest
/** 
 * Request to create a subnetwork in a previously peered service network.
**/
export class AddSubnetworkRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumer" })
  consumer?: string;

  @Metadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=ipPrefixLength" })
  ipPrefixLength?: number;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=requestedAddress" })
  requestedAddress?: string;

  @Metadata({ data: "json, name=subnetwork" })
  subnetwork?: string;

  @Metadata({ data: "json, name=subnetworkUsers" })
  subnetworkUsers?: string[];
}
