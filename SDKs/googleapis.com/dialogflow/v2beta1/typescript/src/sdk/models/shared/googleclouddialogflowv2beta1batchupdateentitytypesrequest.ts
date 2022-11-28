import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1EntityTypeBatch } from "./googleclouddialogflowv2beta1entitytypebatch";



// GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest
/** 
 * The request message for EntityTypes.BatchUpdateEntityTypes.
**/
export class GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityTypeBatchInline" })
  entityTypeBatchInline?: GoogleCloudDialogflowV2beta1EntityTypeBatch;

  @SpeakeasyMetadata({ data: "json, name=entityTypeBatchUri" })
  entityTypeBatchUri?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
