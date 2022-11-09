import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { PageElement } from "./pageelement";


// Group
/** 
 * A PageElement kind representing a joined collection of PageElements.
**/
export class Group extends SpeakeasyBase {
  @Metadata({ data: "json, name=children", elemType: shared.PageElement })
  children?: PageElement[];
}
