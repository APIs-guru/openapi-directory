import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionLabels
/** 
 * User-facing labels for this custom workflow action.
**/
export class ActionLabels extends SpeakeasyBase {
  @Metadata({ data: "json, name=actionCardContent" })
  actionCardContent?: string;

  @Metadata({ data: "json, name=actionDescription" })
  actionDescription?: string;

  @Metadata({ data: "json, name=actionName" })
  actionName: string;

  @Metadata({ data: "json, name=appDisplayName" })
  appDisplayName?: string;

  @Metadata({ data: "json, name=inputFieldDescriptions" })
  inputFieldDescriptions?: Map<string, string>;

  @Metadata({ data: "json, name=inputFieldLabels" })
  inputFieldLabels?: Map<string, string>;
}
