import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EdgeLocation
/** 
 * Representation of a network edge location as per https://cloud.google.com/vpc/docs/edge-locations.
**/
export class EdgeLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metropolitanArea" })
  metropolitanArea?: string;
}
