import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1AssistQueryParameters
/** 
 * Represents the parameters of human assist query.
**/
export class GoogleCloudDialogflowV2beta1AssistQueryParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentsMetadataFilters" })
  documentsMetadataFilters?: Map<string, string>;
}
