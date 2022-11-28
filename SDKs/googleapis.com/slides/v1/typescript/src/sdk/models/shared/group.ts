import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PageElement } from "./pageelement";



// Group
/** 
 * A PageElement kind representing a joined collection of PageElements.
**/
export class Group extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=children", elemType: PageElement })
  children?: PageElement[];
}
