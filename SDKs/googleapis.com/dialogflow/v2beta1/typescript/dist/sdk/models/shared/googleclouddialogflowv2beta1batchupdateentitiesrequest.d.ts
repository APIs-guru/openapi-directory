import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1EntityTypeEntity } from "./googleclouddialogflowv2beta1entitytypeentity";
/**
 * The request message for EntityTypes.BatchUpdateEntities.
**/
export declare class GoogleCloudDialogflowV2beta1BatchUpdateEntitiesRequest extends SpeakeasyBase {
    entities?: GoogleCloudDialogflowV2beta1EntityTypeEntity[];
    languageCode?: string;
    updateMask?: string;
}
