import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleAppsCardV1SelectionItem
/** 
 * A selectable item in the switch control.
**/
export class GoogleAppsCardV1SelectionItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=selected" })
  selected?: boolean;

  @Metadata({ data: "json, name=text" })
  text?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
