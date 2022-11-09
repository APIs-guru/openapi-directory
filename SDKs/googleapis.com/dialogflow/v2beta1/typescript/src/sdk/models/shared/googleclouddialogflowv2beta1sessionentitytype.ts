import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowV2beta1EntityTypeEntity } from "./googleclouddialogflowv2beta1entitytypeentity";

export enum GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum {
    EntityOverrideModeUnspecified = "ENTITY_OVERRIDE_MODE_UNSPECIFIED"
,    EntityOverrideModeOverride = "ENTITY_OVERRIDE_MODE_OVERRIDE"
,    EntityOverrideModeSupplement = "ENTITY_OVERRIDE_MODE_SUPPLEMENT"
}


// GoogleCloudDialogflowV2beta1SessionEntityType
/** 
 * A session represents a conversation between a Dialogflow agent and an end-user. You can create special entities, called session entities, during a session. Session entities can extend or replace custom entity types and only exist during the session that they were created for. All session data, including session entities, is stored by Dialogflow for 20 minutes. For more information, see the [session entity guide](https://cloud.google.com/dialogflow/docs/entities-session).
**/
export class GoogleCloudDialogflowV2beta1SessionEntityType extends SpeakeasyBase {
  @Metadata({ data: "json, name=entities", elemType: shared.GoogleCloudDialogflowV2beta1EntityTypeEntity })
  entities?: GoogleCloudDialogflowV2beta1EntityTypeEntity[];

  @Metadata({ data: "json, name=entityOverrideMode" })
  entityOverrideMode?: GoogleCloudDialogflowV2beta1SessionEntityTypeEntityOverrideModeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
