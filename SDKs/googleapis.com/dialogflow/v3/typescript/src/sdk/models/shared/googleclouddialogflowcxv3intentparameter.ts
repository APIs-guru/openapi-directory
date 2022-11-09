import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowCxV3IntentParameter
/** 
 * Represents an intent parameter.
**/
export class GoogleCloudDialogflowCxV3IntentParameter extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityType" })
  entityType?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=isList" })
  isList?: boolean;

  @Metadata({ data: "json, name=redact" })
  redact?: boolean;
}
