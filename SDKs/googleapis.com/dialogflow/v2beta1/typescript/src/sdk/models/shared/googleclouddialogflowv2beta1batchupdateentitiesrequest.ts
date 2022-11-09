import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1EntityTypeEntity } from "./googleclouddialogflowv2beta1entitytypeentity";


// GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest
/** 
 * The request message for EntityTypes.BatchUpdateEntities.
**/
export class GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entities", elemType: shared.GoogleCloudDialogflowV2beta1EntityTypeEntity })
  entities?: GoogleCloudDialogflowV2beta1EntityTypeEntity[];

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
