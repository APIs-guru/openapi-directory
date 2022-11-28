import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListProperties } from "./listproperties";
import { SuggestedListProperties } from "./suggestedlistproperties";



// List
/** 
 * A List represents the list attributes for a group of paragraphs that all belong to the same list. A paragraph that's part of a list has a reference to the list's ID in its bullet.
**/
export class List extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listProperties" })
  listProperties?: ListProperties;

  @SpeakeasyMetadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=suggestedInsertionId" })
  suggestedInsertionId?: string;

  @SpeakeasyMetadata({ data: "json, name=suggestedListPropertiesChanges", elemType: SuggestedListProperties })
  suggestedListPropertiesChanges?: Map<string, SuggestedListProperties>;
}
