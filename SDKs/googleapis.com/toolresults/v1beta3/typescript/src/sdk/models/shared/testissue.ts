import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StackTrace } from "./stacktrace";
import { Any } from "./any";

export enum TestIssueCategoryEnum {
    UnspecifiedCategory = "unspecifiedCategory"
,    Common = "common"
,    Robo = "robo"
}

export enum TestIssueSeverityEnum {
    UnspecifiedSeverity = "unspecifiedSeverity"
,    Info = "info"
,    Suggestion = "suggestion"
,    Warning = "warning"
,    Severe = "severe"
}

export enum TestIssueTypeEnum {
    UnspecifiedType = "unspecifiedType"
,    FatalException = "fatalException"
,    NativeCrash = "nativeCrash"
,    Anr = "anr"
,    UnusedRoboDirective = "unusedRoboDirective"
,    CompatibleWithOrchestrator = "compatibleWithOrchestrator"
,    LauncherActivityNotFound = "launcherActivityNotFound"
,    StartActivityNotFound = "startActivityNotFound"
,    IncompleteRoboScriptExecution = "incompleteRoboScriptExecution"
,    CompleteRoboScriptExecution = "completeRoboScriptExecution"
,    FailedToInstall = "failedToInstall"
,    AvailableDeepLinks = "availableDeepLinks"
,    NonSdkApiUsageViolation = "nonSdkApiUsageViolation"
,    NonSdkApiUsageReport = "nonSdkApiUsageReport"
,    EncounteredNonAndroidUiWidgetScreen = "encounteredNonAndroidUiWidgetScreen"
,    EncounteredLoginScreen = "encounteredLoginScreen"
,    PerformedGoogleLogin = "performedGoogleLogin"
,    IosException = "iosException"
,    IosCrash = "iosCrash"
,    PerformedMonkeyActions = "performedMonkeyActions"
,    UsedRoboDirective = "usedRoboDirective"
,    UsedRoboIgnoreDirective = "usedRoboIgnoreDirective"
,    InsufficientCoverage = "insufficientCoverage"
,    InAppPurchases = "inAppPurchases"
,    CrashDialogError = "crashDialogError"
,    UiElementsTooDeep = "uiElementsTooDeep"
,    BlankScreen = "blankScreen"
,    OverlappingUiElements = "overlappingUiElements"
,    UnityException = "unityException"
,    DeviceOutOfMemory = "deviceOutOfMemory"
,    LogcatCollectionError = "logcatCollectionError"
,    DetectedAppSplashScreen = "detectedAppSplashScreen"
}


// TestIssue
/** 
 * An issue detected occurring during a test execution.
**/
export class TestIssue extends SpeakeasyBase {
  @Metadata({ data: "json, name=category" })
  category?: TestIssueCategoryEnum;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=severity" })
  severity?: TestIssueSeverityEnum;

  @Metadata({ data: "json, name=stackTrace" })
  stackTrace?: StackTrace;

  @Metadata({ data: "json, name=type" })
  type?: TestIssueTypeEnum;

  @Metadata({ data: "json, name=warning" })
  warning?: Any;
}
