import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Condition } from "./condition";
import { Parameter } from "./parameter";
import { Parameter } from "./parameter";
import { Condition } from "./condition";
import { Parameter } from "./parameter";
import { Condition } from "./condition";
import { Parameter } from "./parameter";
import { Parameter } from "./parameter";
import { Parameter } from "./parameter";
import { Parameter } from "./parameter";
import { Parameter } from "./parameter";
import { Parameter } from "./parameter";
import { Parameter } from "./parameter";
import { Parameter } from "./parameter";
import { Parameter } from "./parameter";
import { Parameter } from "./parameter";
import { Parameter } from "./parameter";
import { Parameter } from "./parameter";
import { Parameter } from "./parameter";
import { Parameter } from "./parameter";
import { Parameter } from "./parameter";

export enum TriggerTypeEnum {
    EventTypeUnspecified = "eventTypeUnspecified"
,    Pageview = "pageview"
,    DomReady = "domReady"
,    WindowLoaded = "windowLoaded"
,    CustomEvent = "customEvent"
,    TriggerGroup = "triggerGroup"
,    Init = "init"
,    ConsentInit = "consentInit"
,    ServerPageview = "serverPageview"
,    Always = "always"
,    FirebaseAppException = "firebaseAppException"
,    FirebaseAppUpdate = "firebaseAppUpdate"
,    FirebaseCampaign = "firebaseCampaign"
,    FirebaseFirstOpen = "firebaseFirstOpen"
,    FirebaseInAppPurchase = "firebaseInAppPurchase"
,    FirebaseNotificationDismiss = "firebaseNotificationDismiss"
,    FirebaseNotificationForeground = "firebaseNotificationForeground"
,    FirebaseNotificationOpen = "firebaseNotificationOpen"
,    FirebaseNotificationReceive = "firebaseNotificationReceive"
,    FirebaseOsUpdate = "firebaseOsUpdate"
,    FirebaseSessionStart = "firebaseSessionStart"
,    FirebaseUserEngagement = "firebaseUserEngagement"
,    FormSubmission = "formSubmission"
,    Click = "click"
,    LinkClick = "linkClick"
,    JsError = "jsError"
,    HistoryChange = "historyChange"
,    Timer = "timer"
,    AmpClick = "ampClick"
,    AmpTimer = "ampTimer"
,    AmpScroll = "ampScroll"
,    AmpVisibility = "ampVisibility"
,    YouTubeVideo = "youTubeVideo"
,    ScrollDepth = "scrollDepth"
,    ElementVisibility = "elementVisibility"
}


// Trigger
/** 
 * Represents a Google Tag Manager Trigger
**/
export class Trigger extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=autoEventFilter", elemType: shared.Condition })
  autoEventFilter?: Condition[];

  @Metadata({ data: "json, name=checkValidation" })
  checkValidation?: Parameter;

  @Metadata({ data: "json, name=containerId" })
  containerId?: string;

  @Metadata({ data: "json, name=continuousTimeMinMilliseconds" })
  continuousTimeMinMilliseconds?: Parameter;

  @Metadata({ data: "json, name=customEventFilter", elemType: shared.Condition })
  customEventFilter?: Condition[];

  @Metadata({ data: "json, name=eventName" })
  eventName?: Parameter;

  @Metadata({ data: "json, name=filter", elemType: shared.Condition })
  filter?: Condition[];

  @Metadata({ data: "json, name=fingerprint" })
  fingerprint?: string;

  @Metadata({ data: "json, name=horizontalScrollPercentageList" })
  horizontalScrollPercentageList?: Parameter;

  @Metadata({ data: "json, name=interval" })
  interval?: Parameter;

  @Metadata({ data: "json, name=intervalSeconds" })
  intervalSeconds?: Parameter;

  @Metadata({ data: "json, name=limit" })
  limit?: Parameter;

  @Metadata({ data: "json, name=maxTimerLengthSeconds" })
  maxTimerLengthSeconds?: Parameter;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=parameter", elemType: shared.Parameter })
  parameter?: Parameter[];

  @Metadata({ data: "json, name=parentFolderId" })
  parentFolderId?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=selector" })
  selector?: Parameter;

  @Metadata({ data: "json, name=tagManagerUrl" })
  tagManagerUrl?: string;

  @Metadata({ data: "json, name=totalTimeMinMilliseconds" })
  totalTimeMinMilliseconds?: Parameter;

  @Metadata({ data: "json, name=triggerId" })
  triggerId?: string;

  @Metadata({ data: "json, name=type" })
  type?: TriggerTypeEnum;

  @Metadata({ data: "json, name=uniqueTriggerId" })
  uniqueTriggerId?: Parameter;

  @Metadata({ data: "json, name=verticalScrollPercentageList" })
  verticalScrollPercentageList?: Parameter;

  @Metadata({ data: "json, name=visibilitySelector" })
  visibilitySelector?: Parameter;

  @Metadata({ data: "json, name=visiblePercentageMax" })
  visiblePercentageMax?: Parameter;

  @Metadata({ data: "json, name=visiblePercentageMin" })
  visiblePercentageMin?: Parameter;

  @Metadata({ data: "json, name=waitForTags" })
  waitForTags?: Parameter;

  @Metadata({ data: "json, name=waitForTagsTimeout" })
  waitForTagsTimeout?: Parameter;

  @Metadata({ data: "json, name=workspaceId" })
  workspaceId?: string;
}
