import { SpeakeasyBase } from "../../../internal/utils";
import { RelevantLocation } from "./relevantlocation";
/**
 * Information of all parent and children locations related to this one.
**/
export declare class RelationshipData extends SpeakeasyBase {
    childrenLocations?: RelevantLocation[];
    parentChain?: string;
    parentLocation?: RelevantLocation;
}
