import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudServicenetworkingV1ConsumerConfigReservedRange
/** 
 * Allocated IP address ranges for this private service access connection.
**/
export class GoogleCloudServicenetworkingV1ConsumerConfigReservedRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=address" })
  address?: string;

  @Metadata({ data: "json, name=ipPrefixLength" })
  ipPrefixLength?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
