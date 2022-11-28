import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1EntityTypeEntity } from "./googleclouddialogflowv2beta1entitytypeentity";
/**
 * The request message for EntityTypes.BatchCreateEntities.
**/
export declare class GoogleCloudDialogflowV2beta1BatchCreateEntitiesRequest extends SpeakeasyBase {
    entities?: GoogleCloudDialogflowV2beta1EntityTypeEntity[];
    languageCode?: string;
}
