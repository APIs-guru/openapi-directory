import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2AssistQueryParameters
/** 
 * Represents the parameters of human assist query.
**/
export class GoogleCloudDialogflowV2AssistQueryParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentsMetadataFilters" })
  documentsMetadataFilters?: Map<string, string>;
}
