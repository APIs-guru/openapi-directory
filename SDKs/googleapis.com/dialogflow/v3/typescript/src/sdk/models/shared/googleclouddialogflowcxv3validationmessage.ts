import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDialogflowCxV3ResourceName } from "./googleclouddialogflowcxv3resourcename";

export enum GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED"
,    Agent = "AGENT"
,    Intent = "INTENT"
,    IntentTrainingPhrase = "INTENT_TRAINING_PHRASE"
,    IntentParameter = "INTENT_PARAMETER"
,    Intents = "INTENTS"
,    IntentTrainingPhrases = "INTENT_TRAINING_PHRASES"
,    EntityType = "ENTITY_TYPE"
,    EntityTypes = "ENTITY_TYPES"
,    Webhook = "WEBHOOK"
,    Flow = "FLOW"
,    Page = "PAGE"
,    Pages = "PAGES"
,    TransitionRouteGroup = "TRANSITION_ROUTE_GROUP"
}

export enum GoogleCloudDialogflowCxV3ValidationMessageSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED"
,    Info = "INFO"
,    Warning = "WARNING"
,    Error = "ERROR"
}


// GoogleCloudDialogflowCxV3ValidationMessage
/** 
 * Agent/flow validation message.
**/
export class GoogleCloudDialogflowCxV3ValidationMessage extends SpeakeasyBase {
  @Metadata({ data: "json, name=detail" })
  detail?: string;

  @Metadata({ data: "json, name=resourceNames", elemType: shared.GoogleCloudDialogflowCxV3ResourceName })
  resourceNames?: GoogleCloudDialogflowCxV3ResourceName[];

  @Metadata({ data: "json, name=resourceType" })
  resourceType?: GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum;

  @Metadata({ data: "json, name=resources" })
  resources?: string[];

  @Metadata({ data: "json, name=severity" })
  severity?: GoogleCloudDialogflowCxV3ValidationMessageSeverityEnum;
}
