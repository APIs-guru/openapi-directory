import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDialogflowV2beta1EntityTypeBatch } from "./googleclouddialogflowv2beta1entitytypebatch";


// GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest
/** 
 * The request message for EntityTypes.BatchUpdateEntityTypes.
**/
export class GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=entityTypeBatchInline" })
  entityTypeBatchInline?: GoogleCloudDialogflowV2beta1EntityTypeBatch;

  @Metadata({ data: "json, name=entityTypeBatchUri" })
  entityTypeBatchUri?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
