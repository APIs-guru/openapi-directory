import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoveDnsZoneRequest
/** 
 * Request to remove a private managed DNS zone in the shared producer host project and a matching DNS peering zone in the consumer project.
**/
export class RemoveDnsZoneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
