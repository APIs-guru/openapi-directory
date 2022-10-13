package shared

type TestMatrixInvalidMatrixDetailsEnum string

const (
	TestMatrixInvalidMatrixDetailsEnumInvalidMatrixDetailsUnspecified         TestMatrixInvalidMatrixDetailsEnum = "INVALID_MATRIX_DETAILS_UNSPECIFIED"
	TestMatrixInvalidMatrixDetailsEnumDetailsUnavailable                      TestMatrixInvalidMatrixDetailsEnum = "DETAILS_UNAVAILABLE"
	TestMatrixInvalidMatrixDetailsEnumMalformedApk                            TestMatrixInvalidMatrixDetailsEnum = "MALFORMED_APK"
	TestMatrixInvalidMatrixDetailsEnumMalformedTestApk                        TestMatrixInvalidMatrixDetailsEnum = "MALFORMED_TEST_APK"
	TestMatrixInvalidMatrixDetailsEnumNoManifest                              TestMatrixInvalidMatrixDetailsEnum = "NO_MANIFEST"
	TestMatrixInvalidMatrixDetailsEnumNoPackageName                           TestMatrixInvalidMatrixDetailsEnum = "NO_PACKAGE_NAME"
	TestMatrixInvalidMatrixDetailsEnumInvalidPackageName                      TestMatrixInvalidMatrixDetailsEnum = "INVALID_PACKAGE_NAME"
	TestMatrixInvalidMatrixDetailsEnumTestSameAsApp                           TestMatrixInvalidMatrixDetailsEnum = "TEST_SAME_AS_APP"
	TestMatrixInvalidMatrixDetailsEnumNoInstrumentation                       TestMatrixInvalidMatrixDetailsEnum = "NO_INSTRUMENTATION"
	TestMatrixInvalidMatrixDetailsEnumNoSignature                             TestMatrixInvalidMatrixDetailsEnum = "NO_SIGNATURE"
	TestMatrixInvalidMatrixDetailsEnumInstrumentationOrchestratorIncompatible TestMatrixInvalidMatrixDetailsEnum = "INSTRUMENTATION_ORCHESTRATOR_INCOMPATIBLE"
	TestMatrixInvalidMatrixDetailsEnumNoTestRunnerClass                       TestMatrixInvalidMatrixDetailsEnum = "NO_TEST_RUNNER_CLASS"
	TestMatrixInvalidMatrixDetailsEnumNoLauncherActivity                      TestMatrixInvalidMatrixDetailsEnum = "NO_LAUNCHER_ACTIVITY"
	TestMatrixInvalidMatrixDetailsEnumForbiddenPermissions                    TestMatrixInvalidMatrixDetailsEnum = "FORBIDDEN_PERMISSIONS"
	TestMatrixInvalidMatrixDetailsEnumInvalidRoboDirectives                   TestMatrixInvalidMatrixDetailsEnum = "INVALID_ROBO_DIRECTIVES"
	TestMatrixInvalidMatrixDetailsEnumInvalidResourceName                     TestMatrixInvalidMatrixDetailsEnum = "INVALID_RESOURCE_NAME"
	TestMatrixInvalidMatrixDetailsEnumInvalidDirectiveAction                  TestMatrixInvalidMatrixDetailsEnum = "INVALID_DIRECTIVE_ACTION"
	TestMatrixInvalidMatrixDetailsEnumTestLoopIntentFilterNotFound            TestMatrixInvalidMatrixDetailsEnum = "TEST_LOOP_INTENT_FILTER_NOT_FOUND"
	TestMatrixInvalidMatrixDetailsEnumScenarioLabelNotDeclared                TestMatrixInvalidMatrixDetailsEnum = "SCENARIO_LABEL_NOT_DECLARED"
	TestMatrixInvalidMatrixDetailsEnumScenarioLabelMalformed                  TestMatrixInvalidMatrixDetailsEnum = "SCENARIO_LABEL_MALFORMED"
	TestMatrixInvalidMatrixDetailsEnumScenarioNotDeclared                     TestMatrixInvalidMatrixDetailsEnum = "SCENARIO_NOT_DECLARED"
	TestMatrixInvalidMatrixDetailsEnumDeviceAdminReceiver                     TestMatrixInvalidMatrixDetailsEnum = "DEVICE_ADMIN_RECEIVER"
	TestMatrixInvalidMatrixDetailsEnumMalformedXcTestZip                      TestMatrixInvalidMatrixDetailsEnum = "MALFORMED_XC_TEST_ZIP"
	TestMatrixInvalidMatrixDetailsEnumBuiltForIosSimulator                    TestMatrixInvalidMatrixDetailsEnum = "BUILT_FOR_IOS_SIMULATOR"
	TestMatrixInvalidMatrixDetailsEnumNoTestsInXcTestZip                      TestMatrixInvalidMatrixDetailsEnum = "NO_TESTS_IN_XC_TEST_ZIP"
	TestMatrixInvalidMatrixDetailsEnumUseDestinationArtifacts                 TestMatrixInvalidMatrixDetailsEnum = "USE_DESTINATION_ARTIFACTS"
	TestMatrixInvalidMatrixDetailsEnumTestNotAppHosted                        TestMatrixInvalidMatrixDetailsEnum = "TEST_NOT_APP_HOSTED"
	TestMatrixInvalidMatrixDetailsEnumPlistCannotBeParsed                     TestMatrixInvalidMatrixDetailsEnum = "PLIST_CANNOT_BE_PARSED"
	TestMatrixInvalidMatrixDetailsEnumTestOnlyApk                             TestMatrixInvalidMatrixDetailsEnum = "TEST_ONLY_APK"
	TestMatrixInvalidMatrixDetailsEnumMalformedIpa                            TestMatrixInvalidMatrixDetailsEnum = "MALFORMED_IPA"
	TestMatrixInvalidMatrixDetailsEnumMissingURLScheme                        TestMatrixInvalidMatrixDetailsEnum = "MISSING_URL_SCHEME"
	TestMatrixInvalidMatrixDetailsEnumMalformedAppBundle                      TestMatrixInvalidMatrixDetailsEnum = "MALFORMED_APP_BUNDLE"
	TestMatrixInvalidMatrixDetailsEnumNoCodeApk                               TestMatrixInvalidMatrixDetailsEnum = "NO_CODE_APK"
	TestMatrixInvalidMatrixDetailsEnumInvalidInputApk                         TestMatrixInvalidMatrixDetailsEnum = "INVALID_INPUT_APK"
	TestMatrixInvalidMatrixDetailsEnumInvalidApkPreviewSdk                    TestMatrixInvalidMatrixDetailsEnum = "INVALID_APK_PREVIEW_SDK"
	TestMatrixInvalidMatrixDetailsEnumMatrixTooLarge                          TestMatrixInvalidMatrixDetailsEnum = "MATRIX_TOO_LARGE"
)

type TestMatrixOutcomeSummaryEnum string

const (
	TestMatrixOutcomeSummaryEnumOutcomeSummaryUnspecified TestMatrixOutcomeSummaryEnum = "OUTCOME_SUMMARY_UNSPECIFIED"
	TestMatrixOutcomeSummaryEnumSuccess                   TestMatrixOutcomeSummaryEnum = "SUCCESS"
	TestMatrixOutcomeSummaryEnumFailure                   TestMatrixOutcomeSummaryEnum = "FAILURE"
	TestMatrixOutcomeSummaryEnumInconclusive              TestMatrixOutcomeSummaryEnum = "INCONCLUSIVE"
	TestMatrixOutcomeSummaryEnumSkipped                   TestMatrixOutcomeSummaryEnum = "SKIPPED"
)

type TestMatrixStateEnum string

const (
	TestMatrixStateEnumTestStateUnspecified     TestMatrixStateEnum = "TEST_STATE_UNSPECIFIED"
	TestMatrixStateEnumValidating               TestMatrixStateEnum = "VALIDATING"
	TestMatrixStateEnumPending                  TestMatrixStateEnum = "PENDING"
	TestMatrixStateEnumRunning                  TestMatrixStateEnum = "RUNNING"
	TestMatrixStateEnumFinished                 TestMatrixStateEnum = "FINISHED"
	TestMatrixStateEnumError                    TestMatrixStateEnum = "ERROR"
	TestMatrixStateEnumUnsupportedEnvironment   TestMatrixStateEnum = "UNSUPPORTED_ENVIRONMENT"
	TestMatrixStateEnumIncompatibleEnvironment  TestMatrixStateEnum = "INCOMPATIBLE_ENVIRONMENT"
	TestMatrixStateEnumIncompatibleArchitecture TestMatrixStateEnum = "INCOMPATIBLE_ARCHITECTURE"
	TestMatrixStateEnumCancelled                TestMatrixStateEnum = "CANCELLED"
	TestMatrixStateEnumInvalid                  TestMatrixStateEnum = "INVALID"
)

type TestMatrix struct {
	ClientInfo           *ClientInfo                         `json:"clientInfo"`
	EnvironmentMatrix    *EnvironmentMatrix                  `json:"environmentMatrix"`
	FailFast             *bool                               `json:"failFast"`
	FlakyTestAttempts    *int32                              `json:"flakyTestAttempts"`
	InvalidMatrixDetails *TestMatrixInvalidMatrixDetailsEnum `json:"invalidMatrixDetails"`
	OutcomeSummary       *TestMatrixOutcomeSummaryEnum       `json:"outcomeSummary"`
	ProjectID            *string                             `json:"projectId"`
	ResultStorage        *ResultStorage                      `json:"resultStorage"`
	State                *TestMatrixStateEnum                `json:"state"`
	TestExecutions       []TestExecution                     `json:"testExecutions"`
	TestMatrixID         *string                             `json:"testMatrixId"`
	TestSpecification    *TestSpecification                  `json:"testSpecification"`
	Timestamp            *string                             `json:"timestamp"`
}
