import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LabelIds
/** 
 * The IDs of labels that should be assigned to the CSS domain.
**/
export class LabelIds extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=labelIds" })
  labelIds?: string[];
}
