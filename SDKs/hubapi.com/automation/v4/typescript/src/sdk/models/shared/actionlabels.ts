import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionLabels
/** 
 * User-facing labels for this custom workflow action.
**/
export class ActionLabels extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=actionCardContent" })
  actionCardContent?: string;

  @SpeakeasyMetadata({ data: "json, name=actionDescription" })
  actionDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=actionName" })
  actionName: string;

  @SpeakeasyMetadata({ data: "json, name=appDisplayName" })
  appDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=inputFieldDescriptions" })
  inputFieldDescriptions?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=inputFieldLabels" })
  inputFieldLabels?: Map<string, string>;
}
