import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CollectionSelector
/** 
 * A selection of a collection, such as `messages as m1`.
**/
export class CollectionSelector extends SpeakeasyBase {
  @Metadata({ data: "json, name=allDescendants" })
  allDescendants?: boolean;

  @Metadata({ data: "json, name=collectionId" })
  collectionId?: string;
}
