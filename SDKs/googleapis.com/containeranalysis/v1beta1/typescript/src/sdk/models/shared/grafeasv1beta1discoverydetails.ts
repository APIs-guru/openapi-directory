import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Discovered } from "./discovered";



// GrafeasV1beta1DiscoveryDetails
/** 
 * Details of a discovery occurrence.
**/
export class GrafeasV1beta1DiscoveryDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=discovered" })
  discovered?: Discovered;
}
