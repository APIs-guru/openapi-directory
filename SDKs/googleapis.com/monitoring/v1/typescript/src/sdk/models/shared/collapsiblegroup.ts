import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CollapsibleGroup
/** 
 * A widget that groups the other widgets. All widgets that are within the area spanned by the grouping widget are considered member widgets.
**/
export class CollapsibleGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=collapsed" })
  collapsed?: boolean;
}
