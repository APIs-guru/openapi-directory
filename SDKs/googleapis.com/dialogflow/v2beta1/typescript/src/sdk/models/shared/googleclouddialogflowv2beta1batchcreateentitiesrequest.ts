import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1EntityTypeEntity } from "./googleclouddialogflowv2beta1entitytypeentity";


// GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest
/** 
 * The request message for EntityTypes.BatchCreateEntities.
**/
export class GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entities", elemType: shared.GoogleCloudDialogflowV2beta1EntityTypeEntity })
  entities?: GoogleCloudDialogflowV2beta1EntityTypeEntity[];

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
