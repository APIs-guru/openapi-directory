import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// EdgeLocation
/** 
 * Representation of a network edge location as per https://cloud.google.com/vpc/docs/edge-locations.
**/
export class EdgeLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=metropolitanArea" })
  metropolitanArea?: string;
}
