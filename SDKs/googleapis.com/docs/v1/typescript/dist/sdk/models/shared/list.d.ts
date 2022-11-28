import { SpeakeasyBase } from "../../../internal/utils";
import { ListProperties } from "./listproperties";
import { SuggestedListProperties } from "./suggestedlistproperties";
/**
 * A List represents the list attributes for a group of paragraphs that all belong to the same list. A paragraph that's part of a list has a reference to the list's ID in its bullet.
**/
export declare class List extends SpeakeasyBase {
    listProperties?: ListProperties;
    suggestedDeletionIds?: string[];
    suggestedInsertionId?: string;
    suggestedListPropertiesChanges?: Map<string, SuggestedListProperties>;
}
