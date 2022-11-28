import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1EntityTypeEntity } from "./googleclouddialogflowv2beta1entitytypeentity";



// GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest
/** 
 * The request message for EntityTypes.BatchUpdateEntities.
**/
export class GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities", elemType: GoogleCloudDialogflowV2beta1EntityTypeEntity })
  entities?: GoogleCloudDialogflowV2beta1EntityTypeEntity[];

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
