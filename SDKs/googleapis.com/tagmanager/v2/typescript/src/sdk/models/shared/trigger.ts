import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Condition } from "./condition";
import { Parameter } from "./parameter";


export enum TriggerTypeEnum {
    EventTypeUnspecified = "eventTypeUnspecified",
    Pageview = "pageview",
    DomReady = "domReady",
    WindowLoaded = "windowLoaded",
    CustomEvent = "customEvent",
    TriggerGroup = "triggerGroup",
    Init = "init",
    ConsentInit = "consentInit",
    ServerPageview = "serverPageview",
    Always = "always",
    FirebaseAppException = "firebaseAppException",
    FirebaseAppUpdate = "firebaseAppUpdate",
    FirebaseCampaign = "firebaseCampaign",
    FirebaseFirstOpen = "firebaseFirstOpen",
    FirebaseInAppPurchase = "firebaseInAppPurchase",
    FirebaseNotificationDismiss = "firebaseNotificationDismiss",
    FirebaseNotificationForeground = "firebaseNotificationForeground",
    FirebaseNotificationOpen = "firebaseNotificationOpen",
    FirebaseNotificationReceive = "firebaseNotificationReceive",
    FirebaseOsUpdate = "firebaseOsUpdate",
    FirebaseSessionStart = "firebaseSessionStart",
    FirebaseUserEngagement = "firebaseUserEngagement",
    FormSubmission = "formSubmission",
    Click = "click",
    LinkClick = "linkClick",
    JsError = "jsError",
    HistoryChange = "historyChange",
    Timer = "timer",
    AmpClick = "ampClick",
    AmpTimer = "ampTimer",
    AmpScroll = "ampScroll",
    AmpVisibility = "ampVisibility",
    YouTubeVideo = "youTubeVideo",
    ScrollDepth = "scrollDepth",
    ElementVisibility = "elementVisibility"
}


// Trigger
/** 
 * Represents a Google Tag Manager Trigger
**/
export class Trigger extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=autoEventFilter", elemType: Condition })
  autoEventFilter?: Condition[];

  @SpeakeasyMetadata({ data: "json, name=checkValidation" })
  checkValidation?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=containerId" })
  containerId?: string;

  @SpeakeasyMetadata({ data: "json, name=continuousTimeMinMilliseconds" })
  continuousTimeMinMilliseconds?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=customEventFilter", elemType: Condition })
  customEventFilter?: Condition[];

  @SpeakeasyMetadata({ data: "json, name=eventName" })
  eventName?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=filter", elemType: Condition })
  filter?: Condition[];

  @SpeakeasyMetadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @SpeakeasyMetadata({ data: "json, name=horizontalScrollPercentageList" })
  horizontalScrollPercentageList?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=interval" })
  interval?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=intervalSeconds" })
  intervalSeconds?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=maxTimerLengthSeconds" })
  maxTimerLengthSeconds?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=parameter", elemType: Parameter })
  parameter?: Parameter[];

  @SpeakeasyMetadata({ data: "json, name=parentFolderId" })
  parentFolderId?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=selector" })
  selector?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=tagManagerUrl" })
  tagManagerUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=totalTimeMinMilliseconds" })
  totalTimeMinMilliseconds?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=triggerId" })
  triggerId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: TriggerTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uniqueTriggerId" })
  uniqueTriggerId?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=verticalScrollPercentageList" })
  verticalScrollPercentageList?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=visibilitySelector" })
  visibilitySelector?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=visiblePercentageMax" })
  visiblePercentageMax?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=visiblePercentageMin" })
  visiblePercentageMin?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=waitForTags" })
  waitForTags?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=waitForTagsTimeout" })
  waitForTagsTimeout?: Parameter;

  @SpeakeasyMetadata({ data: "json, name=workspaceId" })
  workspaceId?: string;
}
