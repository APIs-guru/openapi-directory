import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RelevantLocation } from "./relevantlocation";



// RelationshipData
/** 
 * Information of all parent and children locations related to this one.
**/
export class RelationshipData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childrenLocations", elemType: RelevantLocation })
  childrenLocations?: RelevantLocation[];

  @SpeakeasyMetadata({ data: "json, name=parentChain" })
  parentChain?: string;

  @SpeakeasyMetadata({ data: "json, name=parentLocation" })
  parentLocation?: RelevantLocation;
}
