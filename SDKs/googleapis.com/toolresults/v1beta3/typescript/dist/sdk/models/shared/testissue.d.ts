import { SpeakeasyBase } from "../../../internal/utils";
import { StackTrace } from "./stacktrace";
import { Any } from "./any";
export declare enum TestIssueCategoryEnum {
    UnspecifiedCategory = "unspecifiedCategory",
    Common = "common",
    Robo = "robo"
}
export declare enum TestIssueSeverityEnum {
    UnspecifiedSeverity = "unspecifiedSeverity",
    Info = "info",
    Suggestion = "suggestion",
    Warning = "warning",
    Severe = "severe"
}
export declare enum TestIssueTypeEnum {
    UnspecifiedType = "unspecifiedType",
    FatalException = "fatalException",
    NativeCrash = "nativeCrash",
    Anr = "anr",
    UnusedRoboDirective = "unusedRoboDirective",
    CompatibleWithOrchestrator = "compatibleWithOrchestrator",
    LauncherActivityNotFound = "launcherActivityNotFound",
    StartActivityNotFound = "startActivityNotFound",
    IncompleteRoboScriptExecution = "incompleteRoboScriptExecution",
    CompleteRoboScriptExecution = "completeRoboScriptExecution",
    FailedToInstall = "failedToInstall",
    AvailableDeepLinks = "availableDeepLinks",
    NonSdkApiUsageViolation = "nonSdkApiUsageViolation",
    NonSdkApiUsageReport = "nonSdkApiUsageReport",
    EncounteredNonAndroidUiWidgetScreen = "encounteredNonAndroidUiWidgetScreen",
    EncounteredLoginScreen = "encounteredLoginScreen",
    PerformedGoogleLogin = "performedGoogleLogin",
    IosException = "iosException",
    IosCrash = "iosCrash",
    PerformedMonkeyActions = "performedMonkeyActions",
    UsedRoboDirective = "usedRoboDirective",
    UsedRoboIgnoreDirective = "usedRoboIgnoreDirective",
    InsufficientCoverage = "insufficientCoverage",
    InAppPurchases = "inAppPurchases",
    CrashDialogError = "crashDialogError",
    UiElementsTooDeep = "uiElementsTooDeep",
    BlankScreen = "blankScreen",
    OverlappingUiElements = "overlappingUiElements",
    UnityException = "unityException",
    DeviceOutOfMemory = "deviceOutOfMemory",
    LogcatCollectionError = "logcatCollectionError",
    DetectedAppSplashScreen = "detectedAppSplashScreen"
}
/**
 * An issue detected occurring during a test execution.
**/
export declare class TestIssue extends SpeakeasyBase {
    category?: TestIssueCategoryEnum;
    errorMessage?: string;
    severity?: TestIssueSeverityEnum;
    stackTrace?: StackTrace;
    type?: TestIssueTypeEnum;
    warning?: Any;
}
