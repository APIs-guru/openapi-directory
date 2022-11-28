import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDialogflowV2BatchDeleteEntitiesRequest
/** 
 * The request message for EntityTypes.BatchDeleteEntities.
**/
export class GoogleCloudDialogflowV2BatchDeleteEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityValues" })
  entityValues?: string[];

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
