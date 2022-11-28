import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Item } from "./item";



// DetectedItems
/** 
 * Rich Results items grouped by type.
**/
export class DetectedItems extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Item })
  items?: Item[];

  @SpeakeasyMetadata({ data: "json, name=richResultType" })
  richResultType?: string;
}
