import { SpeakeasyBase } from "../../../internal/utils";
import { Condition } from "./condition";
import { Parameter } from "./parameter";
export declare enum TriggerTypeEnum {
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
/**
 * Represents a Google Tag Manager Trigger
**/
export declare class Trigger extends SpeakeasyBase {
    accountId?: string;
    autoEventFilter?: Condition[];
    checkValidation?: Parameter;
    containerId?: string;
    continuousTimeMinMilliseconds?: Parameter;
    customEventFilter?: Condition[];
    eventName?: Parameter;
    filter?: Condition[];
    fingerprint?: string;
    horizontalScrollPercentageList?: Parameter;
    interval?: Parameter;
    intervalSeconds?: Parameter;
    limit?: Parameter;
    maxTimerLengthSeconds?: Parameter;
    name?: string;
    notes?: string;
    parameter?: Parameter[];
    parentFolderId?: string;
    path?: string;
    selector?: Parameter;
    tagManagerUrl?: string;
    totalTimeMinMilliseconds?: Parameter;
    triggerId?: string;
    type?: TriggerTypeEnum;
    uniqueTriggerId?: Parameter;
    verticalScrollPercentageList?: Parameter;
    visibilitySelector?: Parameter;
    visiblePercentageMax?: Parameter;
    visiblePercentageMin?: Parameter;
    waitForTags?: Parameter;
    waitForTagsTimeout?: Parameter;
    workspaceId?: string;
}
