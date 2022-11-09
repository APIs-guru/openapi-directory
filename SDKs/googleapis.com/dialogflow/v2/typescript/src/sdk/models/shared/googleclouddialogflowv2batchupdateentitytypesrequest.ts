import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2EntityTypeBatch } from "./googleclouddialogflowv2entitytypebatch";


// GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest
/** 
 * The request message for EntityTypes.BatchUpdateEntityTypes.
**/
export class GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityTypeBatchInline" })
  entityTypeBatchInline?: GoogleCloudDialogflowV2EntityTypeBatch;

  @Metadata({ data: "json, name=entityTypeBatchUri" })
  entityTypeBatchUri?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
