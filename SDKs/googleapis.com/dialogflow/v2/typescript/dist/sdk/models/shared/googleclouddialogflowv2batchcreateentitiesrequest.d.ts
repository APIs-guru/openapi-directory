import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2EntityTypeEntity } from "./googleclouddialogflowv2entitytypeentity";
/**
 * The request message for EntityTypes.BatchCreateEntities.
**/
export declare class GoogleCloudDialogflowV2BatchCreateEntitiesRequest extends SpeakeasyBase {
    entities?: GoogleCloudDialogflowV2EntityTypeEntity[];
    languageCode?: string;
}
