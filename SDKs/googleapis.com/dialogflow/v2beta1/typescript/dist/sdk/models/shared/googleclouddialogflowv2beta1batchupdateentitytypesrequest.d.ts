import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1EntityTypeBatch } from "./googleclouddialogflowv2beta1entitytypebatch";
/**
 * The request message for EntityTypes.BatchUpdateEntityTypes.
**/
export declare class GoogleCloudDialogflowV2beta1BatchUpdateEntityTypesRequest extends SpeakeasyBase {
    entityTypeBatchInline?: GoogleCloudDialogflowV2beta1EntityTypeBatch;
    entityTypeBatchUri?: string;
    languageCode?: string;
    updateMask?: string;
}
