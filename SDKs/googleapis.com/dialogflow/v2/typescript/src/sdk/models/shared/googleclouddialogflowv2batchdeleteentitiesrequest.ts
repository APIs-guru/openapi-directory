import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDialogflowV2BatchDeleteEntitiesRequest
/** 
 * The request message for EntityTypes.BatchDeleteEntities.
**/
export class GoogleCloudDialogflowV2BatchDeleteEntitiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityValues" })
  entityValues?: string[];

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
