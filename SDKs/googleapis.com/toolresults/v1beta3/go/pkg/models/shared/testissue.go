package shared

type TestIssueCategoryEnum string

const (
	TestIssueCategoryEnumUnspecifiedCategory TestIssueCategoryEnum = "unspecifiedCategory"
	TestIssueCategoryEnumCommon              TestIssueCategoryEnum = "common"
	TestIssueCategoryEnumRobo                TestIssueCategoryEnum = "robo"
)

type TestIssueSeverityEnum string

const (
	TestIssueSeverityEnumUnspecifiedSeverity TestIssueSeverityEnum = "unspecifiedSeverity"
	TestIssueSeverityEnumInfo                TestIssueSeverityEnum = "info"
	TestIssueSeverityEnumSuggestion          TestIssueSeverityEnum = "suggestion"
	TestIssueSeverityEnumWarning             TestIssueSeverityEnum = "warning"
	TestIssueSeverityEnumSevere              TestIssueSeverityEnum = "severe"
)

type TestIssueTypeEnum string

const (
	TestIssueTypeEnumUnspecifiedType                     TestIssueTypeEnum = "unspecifiedType"
	TestIssueTypeEnumFatalException                      TestIssueTypeEnum = "fatalException"
	TestIssueTypeEnumNativeCrash                         TestIssueTypeEnum = "nativeCrash"
	TestIssueTypeEnumAnr                                 TestIssueTypeEnum = "anr"
	TestIssueTypeEnumUnusedRoboDirective                 TestIssueTypeEnum = "unusedRoboDirective"
	TestIssueTypeEnumCompatibleWithOrchestrator          TestIssueTypeEnum = "compatibleWithOrchestrator"
	TestIssueTypeEnumLauncherActivityNotFound            TestIssueTypeEnum = "launcherActivityNotFound"
	TestIssueTypeEnumStartActivityNotFound               TestIssueTypeEnum = "startActivityNotFound"
	TestIssueTypeEnumIncompleteRoboScriptExecution       TestIssueTypeEnum = "incompleteRoboScriptExecution"
	TestIssueTypeEnumCompleteRoboScriptExecution         TestIssueTypeEnum = "completeRoboScriptExecution"
	TestIssueTypeEnumFailedToInstall                     TestIssueTypeEnum = "failedToInstall"
	TestIssueTypeEnumAvailableDeepLinks                  TestIssueTypeEnum = "availableDeepLinks"
	TestIssueTypeEnumNonSdkAPIUsageViolation             TestIssueTypeEnum = "nonSdkApiUsageViolation"
	TestIssueTypeEnumNonSdkAPIUsageReport                TestIssueTypeEnum = "nonSdkApiUsageReport"
	TestIssueTypeEnumEncounteredNonAndroidUIWidgetScreen TestIssueTypeEnum = "encounteredNonAndroidUiWidgetScreen"
	TestIssueTypeEnumEncounteredLoginScreen              TestIssueTypeEnum = "encounteredLoginScreen"
	TestIssueTypeEnumPerformedGoogleLogin                TestIssueTypeEnum = "performedGoogleLogin"
	TestIssueTypeEnumIosException                        TestIssueTypeEnum = "iosException"
	TestIssueTypeEnumIosCrash                            TestIssueTypeEnum = "iosCrash"
	TestIssueTypeEnumPerformedMonkeyActions              TestIssueTypeEnum = "performedMonkeyActions"
	TestIssueTypeEnumUsedRoboDirective                   TestIssueTypeEnum = "usedRoboDirective"
	TestIssueTypeEnumUsedRoboIgnoreDirective             TestIssueTypeEnum = "usedRoboIgnoreDirective"
	TestIssueTypeEnumInsufficientCoverage                TestIssueTypeEnum = "insufficientCoverage"
	TestIssueTypeEnumInAppPurchases                      TestIssueTypeEnum = "inAppPurchases"
	TestIssueTypeEnumCrashDialogError                    TestIssueTypeEnum = "crashDialogError"
	TestIssueTypeEnumUIElementsTooDeep                   TestIssueTypeEnum = "uiElementsTooDeep"
	TestIssueTypeEnumBlankScreen                         TestIssueTypeEnum = "blankScreen"
	TestIssueTypeEnumOverlappingUIElements               TestIssueTypeEnum = "overlappingUiElements"
	TestIssueTypeEnumUnityException                      TestIssueTypeEnum = "unityException"
	TestIssueTypeEnumDeviceOutOfMemory                   TestIssueTypeEnum = "deviceOutOfMemory"
	TestIssueTypeEnumLogcatCollectionError               TestIssueTypeEnum = "logcatCollectionError"
	TestIssueTypeEnumDetectedAppSplashScreen             TestIssueTypeEnum = "detectedAppSplashScreen"
)

type TestIssue struct {
	Category     *TestIssueCategoryEnum `json:"category"`
	ErrorMessage *string                `json:"errorMessage"`
	Severity     *TestIssueSeverityEnum `json:"severity"`
	StackTrace   *StackTrace            `json:"stackTrace"`
	Type         *TestIssueTypeEnum     `json:"type"`
	Warning      *Any                   `json:"warning"`
}
