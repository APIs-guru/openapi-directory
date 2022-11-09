import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FilterAction
/** 
 * A set of actions to perform on a message.
**/
export class FilterAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=addLabelIds" })
  addLabelIds?: string[];

  @Metadata({ data: "json, name=forward" })
  forward?: string;

  @Metadata({ data: "json, name=removeLabelIds" })
  removeLabelIds?: string[];
}
