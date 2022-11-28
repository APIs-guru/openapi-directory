import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2IntentParameter
/** 
 * Represents intent parameters.
**/
export class GoogleCloudDialogflowV2IntentParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultValue" })
  defaultValue?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=entityTypeDisplayName" })
  entityTypeDisplayName?: string;

  @SpeakeasyMetadata({ data: "json, name=isList" })
  isList?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mandatory" })
  mandatory?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=prompts" })
  prompts?: string[];

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
