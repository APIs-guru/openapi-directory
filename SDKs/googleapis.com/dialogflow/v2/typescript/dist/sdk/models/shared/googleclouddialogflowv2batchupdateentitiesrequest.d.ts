import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2EntityTypeEntity } from "./googleclouddialogflowv2entitytypeentity";
/**
 * The request message for EntityTypes.BatchUpdateEntities.
**/
export declare class GoogleCloudDialogflowV2BatchUpdateEntitiesRequest extends SpeakeasyBase {
    entities?: GoogleCloudDialogflowV2EntityTypeEntity[];
    languageCode?: string;
    updateMask?: string;
}
