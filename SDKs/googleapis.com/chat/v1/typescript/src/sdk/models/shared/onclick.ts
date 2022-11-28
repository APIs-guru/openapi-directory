import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FormAction } from "./formaction";
import { OpenLink } from "./openlink";



// OnClick
/** 
 * An onclick action (e.g. open a link).
**/
export class OnClick extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: FormAction;

  @SpeakeasyMetadata({ data: "json, name=openLink" })
  openLink?: OpenLink;
}
