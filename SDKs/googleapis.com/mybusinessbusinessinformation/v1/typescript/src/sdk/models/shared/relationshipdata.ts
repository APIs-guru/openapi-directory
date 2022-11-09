import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RelevantLocation } from "./relevantlocation";
import { RelevantLocation } from "./relevantlocation";


// RelationshipData
/** 
 * Information of all parent and children locations related to this one.
**/
export class RelationshipData extends SpeakeasyBase {
  @Metadata({ data: "json, name=childrenLocations", elemType: shared.RelevantLocation })
  childrenLocations?: RelevantLocation[];

  @Metadata({ data: "json, name=parentChain" })
  parentChain?: string;

  @Metadata({ data: "json, name=parentLocation" })
  parentLocation?: RelevantLocation;
}
