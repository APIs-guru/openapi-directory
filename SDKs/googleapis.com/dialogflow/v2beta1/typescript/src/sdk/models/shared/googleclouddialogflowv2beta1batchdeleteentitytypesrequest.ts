import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest
/** 
 * The request message for EntityTypes.BatchDeleteEntityTypes.
**/
export class GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityTypeNames" })
  entityTypeNames?: string[];
}
