import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ResourceName } from "./googleclouddialogflowcxv3beta1resourcename";


export enum GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum {
    ResourceTypeUnspecified = "RESOURCE_TYPE_UNSPECIFIED",
    Agent = "AGENT",
    Intent = "INTENT",
    IntentTrainingPhrase = "INTENT_TRAINING_PHRASE",
    IntentParameter = "INTENT_PARAMETER",
    Intents = "INTENTS",
    IntentTrainingPhrases = "INTENT_TRAINING_PHRASES",
    EntityType = "ENTITY_TYPE",
    EntityTypes = "ENTITY_TYPES",
    Webhook = "WEBHOOK",
    Flow = "FLOW",
    Page = "PAGE",
    Pages = "PAGES",
    TransitionRouteGroup = "TRANSITION_ROUTE_GROUP"
}

export enum GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR"
}


// GoogleCloudDialogflowCxV3beta1ValidationMessage
/** 
 * Agent/flow validation message.
**/
export class GoogleCloudDialogflowCxV3beta1ValidationMessage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=detail" })
  detail?: string;

  @SpeakeasyMetadata({ data: "json, name=resourceNames", elemType: GoogleCloudDialogflowCxV3beta1ResourceName })
  resourceNames?: GoogleCloudDialogflowCxV3beta1ResourceName[];

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType?: GoogleCloudDialogflowCxV3beta1ValidationMessageResourceTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=resources" })
  resources?: string[];

  @SpeakeasyMetadata({ data: "json, name=severity" })
  severity?: GoogleCloudDialogflowCxV3beta1ValidationMessageSeverityEnum;
}
