import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2EntityTypeBatch } from "./googleclouddialogflowv2entitytypebatch";
/**
 * The request message for EntityTypes.BatchUpdateEntityTypes.
**/
export declare class GoogleCloudDialogflowV2BatchUpdateEntityTypesRequest extends SpeakeasyBase {
    entityTypeBatchInline?: GoogleCloudDialogflowV2EntityTypeBatch;
    entityTypeBatchUri?: string;
    languageCode?: string;
    updateMask?: string;
}
