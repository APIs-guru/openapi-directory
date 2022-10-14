package shared

type AndroidInstrumentationTestOrchestratorOptionEnum string

const (
	AndroidInstrumentationTestOrchestratorOptionEnumOrchestratorOptionUnspecified AndroidInstrumentationTestOrchestratorOptionEnum = "ORCHESTRATOR_OPTION_UNSPECIFIED"
	AndroidInstrumentationTestOrchestratorOptionEnumUseOrchestrator               AndroidInstrumentationTestOrchestratorOptionEnum = "USE_ORCHESTRATOR"
	AndroidInstrumentationTestOrchestratorOptionEnumDoNotUseOrchestrator          AndroidInstrumentationTestOrchestratorOptionEnum = "DO_NOT_USE_ORCHESTRATOR"
)

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
