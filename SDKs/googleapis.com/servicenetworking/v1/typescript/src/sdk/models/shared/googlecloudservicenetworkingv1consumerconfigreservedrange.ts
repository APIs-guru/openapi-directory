import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudServicenetworkingV1ConsumerConfigReservedRange
/** 
 * Allocated IP address ranges for this private service access connection.
**/
export class GoogleCloudServicenetworkingV1ConsumerConfigReservedRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=ipPrefixLength" })
  ipPrefixLength?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
