import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddDnsZoneRequest
/** 
 * Request to add a private managed DNS zone in the shared producer host project and a matching DNS peering zone in the consumer project.
**/
export class AddDnsZoneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;

  @SpeakeasyMetadata({ data: "json, name=dnsSuffix" })
  dnsSuffix?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
