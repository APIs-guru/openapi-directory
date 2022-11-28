import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1AssistQueryParameters
/** 
 * Represents the parameters of human assist query.
**/
export class GoogleCloudDialogflowV2beta1AssistQueryParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentsMetadataFilters" })
  documentsMetadataFilters?: Map<string, string>;
}
