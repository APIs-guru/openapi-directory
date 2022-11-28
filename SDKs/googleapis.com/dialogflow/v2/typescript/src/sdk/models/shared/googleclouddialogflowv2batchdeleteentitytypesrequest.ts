import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest
/** 
 * The request message for EntityTypes.BatchDeleteEntityTypes.
**/
export class GoogleCloudDialogflowV2BatchDeleteEntityTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityTypeNames" })
  entityTypeNames?: string[];
}
