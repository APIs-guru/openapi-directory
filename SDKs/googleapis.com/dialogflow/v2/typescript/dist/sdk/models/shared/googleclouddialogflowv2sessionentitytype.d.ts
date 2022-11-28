import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2EntityTypeEntity } from "./googleclouddialogflowv2entitytypeentity";
export declare enum GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum {
    EntityOverrideModeUnspecified = "ENTITY_OVERRIDE_MODE_UNSPECIFIED",
    EntityOverrideModeOverride = "ENTITY_OVERRIDE_MODE_OVERRIDE",
    EntityOverrideModeSupplement = "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
}
/**
 * A session represents a conversation between a Dialogflow agent and an end-user. You can create special entities, called session entities, during a session. Session entities can extend or replace custom entity types and only exist during the session that they were created for. All session data, including session entities, is stored by Dialogflow for 20 minutes. For more information, see the [session entity guide](https://cloud.google.com/dialogflow/docs/entities-session).
**/
export declare class GoogleCloudDialogflowV2SessionEntityType extends SpeakeasyBase {
    entities?: GoogleCloudDialogflowV2EntityTypeEntity[];
    entityOverrideMode?: GoogleCloudDialogflowV2SessionEntityTypeEntityOverrideModeEnum;
    name?: string;
}
