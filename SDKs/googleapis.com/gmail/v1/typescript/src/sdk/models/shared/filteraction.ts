import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FilterAction
/** 
 * A set of actions to perform on a message.
**/
export class FilterAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addLabelIds" })
  addLabelIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=forward" })
  forward?: string;

  @SpeakeasyMetadata({ data: "json, name=removeLabelIds" })
  removeLabelIds?: string[];
}
