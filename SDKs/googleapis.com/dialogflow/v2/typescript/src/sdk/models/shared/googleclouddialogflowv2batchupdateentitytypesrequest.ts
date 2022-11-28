import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2EntityTypeBatch } from "./googleclouddialogflowv2entitytypebatch";



// GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest
/** 
 * The request message for EntityTypes.BatchUpdateEntityTypes.
**/
export class GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=entityTypeBatchInline" })
  entityTypeBatchInline?: GoogleCloudDialogflowV2EntityTypeBatch;

  @SpeakeasyMetadata({ data: "json, name=entityTypeBatchUri" })
  entityTypeBatchUri?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
