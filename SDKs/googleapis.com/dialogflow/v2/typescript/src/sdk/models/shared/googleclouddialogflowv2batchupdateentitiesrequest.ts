import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2EntityTypeEntity } from "./googleclouddialogflowv2entitytypeentity";


// GoogleCloudDialogflowV2BatchUpdateEntitiesRequest
/** 
 * The request message for EntityTypes.BatchUpdateEntities.
**/
export class GoogleCloudDialogflowV2BatchUpdateEntitiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entities", elemType: shared.GoogleCloudDialogflowV2EntityTypeEntity })
  entities?: GoogleCloudDialogflowV2EntityTypeEntity[];

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
