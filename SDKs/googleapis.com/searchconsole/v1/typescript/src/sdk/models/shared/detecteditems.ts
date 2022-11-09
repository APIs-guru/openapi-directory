import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Item } from "./item";


// DetectedItems
/** 
 * Rich Results items grouped by type.
**/
export class DetectedItems extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Item })
  items?: Item[];

  @Metadata({ data: "json, name=richResultType" })
  richResultType?: string;
}
