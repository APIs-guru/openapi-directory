import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2EntityTypeEntity } from "./googleclouddialogflowv2entitytypeentity";



// GoogleCloudDialogflowV2BatchCreateEntitiesRequest
/** 
 * The request message for EntityTypes.BatchCreateEntities.
**/
export class GoogleCloudDialogflowV2BatchCreateEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities", elemType: GoogleCloudDialogflowV2EntityTypeEntity })
  entities?: GoogleCloudDialogflowV2EntityTypeEntity[];

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
