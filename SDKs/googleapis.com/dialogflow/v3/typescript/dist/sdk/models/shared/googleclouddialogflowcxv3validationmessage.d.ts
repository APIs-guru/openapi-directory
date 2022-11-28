import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ResourceName } from "./googleclouddialogflowcxv3resourcename";
export declare enum GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum {
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
export declare enum GoogleCloudDialogflowCxV3ValidationMessageSeverityEnum {
    SeverityUnspecified = "SEVERITY_UNSPECIFIED",
    Info = "INFO",
    Warning = "WARNING",
    Error = "ERROR"
}
/**
 * Agent/flow validation message.
**/
export declare class GoogleCloudDialogflowCxV3ValidationMessage extends SpeakeasyBase {
    detail?: string;
    resourceNames?: GoogleCloudDialogflowCxV3ResourceName[];
    resourceType?: GoogleCloudDialogflowCxV3ValidationMessageResourceTypeEnum;
    resources?: string[];
    severity?: GoogleCloudDialogflowCxV3ValidationMessageSeverityEnum;
}
