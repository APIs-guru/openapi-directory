import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CollectionSelector
/** 
 * A selection of a collection, such as `messages as m1`.
**/
export class CollectionSelector extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allDescendants" })
  allDescendants?: boolean;

  @SpeakeasyMetadata({ data: "json, name=collectionId" })
  collectionId?: string;
}
