import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleAppsCardV1SelectionItem
/** 
 * A selectable item in a selection input, such as a check box or a switch.
**/
export class GoogleAppsCardV1SelectionItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=selected" })
  selected?: boolean;

  @SpeakeasyMetadata({ data: "json, name=text" })
  text?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
