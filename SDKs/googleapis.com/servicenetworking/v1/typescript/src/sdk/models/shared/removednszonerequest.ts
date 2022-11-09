import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemoveDnsZoneRequest
/** 
 * Request to remove a private managed DNS zone in the shared producer host project and a matching DNS peering zone in the consumer project.
**/
export class RemoveDnsZoneRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
