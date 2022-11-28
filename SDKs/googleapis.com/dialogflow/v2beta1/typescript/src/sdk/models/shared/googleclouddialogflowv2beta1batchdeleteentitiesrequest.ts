import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest
/** 
 * The request message for EntityTypes.BatchDeleteEntities.
**/
export class GoogleCloudDialogflowV2beta1BatchDeleteEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityValues" })
  entityValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
