import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1EntityTypeEntity } from "./googleclouddialogflowcxv3beta1entitytypeentity";
export declare enum GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum {
    EntityOverrideModeUnspecified = "ENTITY_OVERRIDE_MODE_UNSPECIFIED",
    EntityOverrideModeOverride = "ENTITY_OVERRIDE_MODE_OVERRIDE",
    EntityOverrideModeSupplement = "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
}
/**
 * Session entity types are referred to as **User** entity types and are entities that are built for an individual user such as favorites, preferences, playlists, and so on. You can redefine a session entity type at the session level to extend or replace a custom entity type at the user session level (we refer to the entity types defined at the agent level as "custom entity types"). Note: session entity types apply to all queries, regardless of the language. For more information about entity types, see the [Dialogflow documentation](https://cloud.google.com/dialogflow/docs/entities-overview).
**/
export declare class GoogleCloudDialogflowCxV3beta1SessionEntityType extends SpeakeasyBase {
    entities?: GoogleCloudDialogflowCxV3beta1EntityTypeEntity[];
    entityOverrideMode?: GoogleCloudDialogflowCxV3beta1SessionEntityTypeEntityOverrideModeEnum;
    name?: string;
}
