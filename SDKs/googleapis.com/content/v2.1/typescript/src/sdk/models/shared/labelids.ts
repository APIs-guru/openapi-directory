import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LabelIds
/** 
 * The IDs of labels that should be assigned to the CSS domain.
**/
export class LabelIds extends SpeakeasyBase {
  @Metadata({ data: "json, name=labelIds" })
  labelIds?: string[];
}
