import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1EntityTypeEntity } from "./googleclouddialogflowv2beta1entitytypeentity";



// GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest
/** 
 * The request message for EntityTypes.BatchCreateEntities.
**/
export class GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entities", elemType: GoogleCloudDialogflowV2beta1EntityTypeEntity })
  entities?: GoogleCloudDialogflowV2beta1EntityTypeEntity[];

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
