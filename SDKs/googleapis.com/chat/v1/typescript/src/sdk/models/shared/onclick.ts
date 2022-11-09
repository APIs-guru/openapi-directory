import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FormAction } from "./formaction";
import { OpenLink } from "./openlink";


// OnClick
/** 
 * An onclick action (e.g. open a link).
**/
export class OnClick extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: FormAction;

  @Metadata({ data: "json, name=openLink" })
  openLink?: OpenLink;
}
