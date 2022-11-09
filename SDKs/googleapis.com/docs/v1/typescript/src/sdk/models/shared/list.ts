import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ListProperties } from "./listproperties";
import { SuggestedListProperties } from "./suggestedlistproperties";


// List
/** 
 * A List represents the list attributes for a group of paragraphs that all belong to the same list. A paragraph that's part of a list has a reference to the list's ID in its bullet.
**/
export class List extends SpeakeasyBase {
  @Metadata({ data: "json, name=listProperties" })
  listProperties?: ListProperties;

  @Metadata({ data: "json, name=suggestedDeletionIds" })
  suggestedDeletionIds?: string[];

  @Metadata({ data: "json, name=suggestedInsertionId" })
  suggestedInsertionId?: string;

  @Metadata({ data: "json, name=suggestedListPropertiesChanges", elemType: shared.SuggestedListProperties })
  suggestedListPropertiesChanges?: Map<string, SuggestedListProperties>;
}
