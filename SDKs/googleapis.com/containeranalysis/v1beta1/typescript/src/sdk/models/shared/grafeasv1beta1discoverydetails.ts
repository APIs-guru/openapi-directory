import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Discovered } from "./discovered";


// GrafeasV1beta1DiscoveryDetails
/** 
 * Details of a discovery occurrence.
**/
export class GrafeasV1beta1DiscoveryDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=discovered" })
  discovered?: Discovered;
}
