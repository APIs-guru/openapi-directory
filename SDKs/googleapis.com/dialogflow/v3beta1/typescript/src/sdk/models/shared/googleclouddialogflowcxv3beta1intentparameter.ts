import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowCxV3beta1IntentParameter
/** 
 * Represents an intent parameter.
**/
export class GoogleCloudDialogflowCxV3beta1IntentParameter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityType" })
  entityType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=isList" })
  isList?: boolean;

  @SpeakeasyMetadata({ data: "json, name=redact" })
  redact?: boolean;
}
