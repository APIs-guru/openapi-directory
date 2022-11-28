import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2EntityTypeEntity } from "./googleclouddialogflowv2entitytypeentity";



// GoogleCloudDialogflowV2BatchUpdateEntitiesRequest
/** 
 * The request message for EntityTypes.BatchUpdateEntities.
**/
export class GoogleCloudDialogflowV2BatchUpdateEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities", elemType: GoogleCloudDialogflowV2EntityTypeEntity })
  entities?: GoogleCloudDialogflowV2EntityTypeEntity[];

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
