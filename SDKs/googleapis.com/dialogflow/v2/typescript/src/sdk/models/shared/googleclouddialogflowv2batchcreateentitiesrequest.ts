import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2EntityTypeEntity } from "./googleclouddialogflowv2entitytypeentity";


// GoogleCloudDialogflowV2BatchCreateEntitiesRequest
/** 
 * The request message for EntityTypes.BatchCreateEntities.
**/
export class GoogleCloudDialogflowV2BatchCreateEntitiesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entities", elemType: shared.GoogleCloudDialogflowV2EntityTypeEntity })
  entities?: GoogleCloudDialogflowV2EntityTypeEntity[];

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
