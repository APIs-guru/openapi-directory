import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AddDnsZoneRequest
/** 
 * Request to add a private managed DNS zone in the shared producer host project and a matching DNS peering zone in the consumer project.
**/
export class AddDnsZoneRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumerNetwork" })
  consumerNetwork?: string;

  @Metadata({ data: "json, name=dnsSuffix" })
  dnsSuffix?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
