import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest
/** 
 * The request message for EntityTypes.BatchDeleteEntityTypes.
**/
export class GoogleCloudDialogflowV2beta1BatchDeleteEntityTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityTypeNames" })
  entityTypeNames?: string[];
}
