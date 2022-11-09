import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2IntentParameter
/** 
 * Represents intent parameters.
**/
export class GoogleCloudDialogflowV2IntentParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultValue" })
  defaultValue?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=entityTypeDisplayName" })
  entityTypeDisplayName?: string;

  @Metadata({ data: "json, name=isList" })
  isList?: boolean;

  @Metadata({ data: "json, name=mandatory" })
  mandatory?: boolean;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=prompts" })
  prompts?: string[];

  @Metadata({ data: "json, name=value" })
  value?: string;
}
