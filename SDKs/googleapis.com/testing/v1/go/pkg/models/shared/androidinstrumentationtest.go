package shared

type AndroidInstrumentationTestOrchestratorOptionEnum string

const (
	AndroidInstrumentationTestOrchestratorOptionEnumOrchestratorOptionUnspecified AndroidInstrumentationTestOrchestratorOptionEnum = "ORCHESTRATOR_OPTION_UNSPECIFIED"
	AndroidInstrumentationTestOrchestratorOptionEnumUseOrchestrator               AndroidInstrumentationTestOrchestratorOptionEnum = "USE_ORCHESTRATOR"
	AndroidInstrumentationTestOrchestratorOptionEnumDoNotUseOrchestrator          AndroidInstrumentationTestOrchestratorOptionEnum = "DO_NOT_USE_ORCHESTRATOR"
)

// AndroidInstrumentationTest
// A test of an Android application that can control an Android component independently of its normal lifecycle. Android instrumentation tests run an application APK and test APK inside the same process on a virtual or physical AndroidDevice. They also specify a test runner class, such as com.google.GoogleTestRunner, which can vary on the specific instrumentation framework chosen. See for more information on types of Android tests.
type AndroidInstrumentationTest struct {
	AppApk             *FileReference                                    `json:"appApk,omitempty"`
	AppBundle          *AppBundle                                        `json:"appBundle,omitempty"`
	AppPackageID       *string                                           `json:"appPackageId,omitempty"`
	OrchestratorOption *AndroidInstrumentationTestOrchestratorOptionEnum `json:"orchestratorOption,omitempty"`
	ShardingOption     *ShardingOption                                   `json:"shardingOption,omitempty"`
	TestApk            *FileReference                                    `json:"testApk,omitempty"`
	TestPackageID      *string                                           `json:"testPackageId,omitempty"`
	TestRunnerClass    *string                                           `json:"testRunnerClass,omitempty"`
	TestTargets        []string                                          `json:"testTargets,omitempty"`
}
