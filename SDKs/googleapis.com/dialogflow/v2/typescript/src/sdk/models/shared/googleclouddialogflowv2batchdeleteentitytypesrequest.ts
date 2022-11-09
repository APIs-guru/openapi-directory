import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest
/** 
 * The request message for EntityTypes.BatchDeleteEntityTypes.
**/
export class GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityTypeNames" })
  entityTypeNames?: string[];
}
