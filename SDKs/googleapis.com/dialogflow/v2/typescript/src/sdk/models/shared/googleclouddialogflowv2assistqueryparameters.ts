import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2AssistQueryParameters
/** 
 * Represents the parameters of human assist query.
**/
export class GoogleCloudDialogflowV2AssistQueryParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=documentsMetadataFilters" })
  documentsMetadataFilters?: Map<string, string>;
}
