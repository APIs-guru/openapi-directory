package shared

type AndroidInstrumentationTestOrchestratorOptionEnum string

const (
	AndroidInstrumentationTestOrchestratorOptionEnumOrchestratorOptionUnspecified AndroidInstrumentationTestOrchestratorOptionEnum = "ORCHESTRATOR_OPTION_UNSPECIFIED"
	AndroidInstrumentationTestOrchestratorOptionEnumUseOrchestrator               AndroidInstrumentationTestOrchestratorOptionEnum = "USE_ORCHESTRATOR"
	AndroidInstrumentationTestOrchestratorOptionEnumDoNotUseOrchestrator          AndroidInstrumentationTestOrchestratorOptionEnum = "DO_NOT_USE_ORCHESTRATOR"
)

type AndroidInstrumentationTest struct {
	AppApk             *FileReference                                    `json:"appApk"`
	AppBundle          *AppBundle                                        `json:"appBundle"`
	AppPackageID       *string                                           `json:"appPackageId"`
	OrchestratorOption *AndroidInstrumentationTestOrchestratorOptionEnum `json:"orchestratorOption"`
	ShardingOption     *ShardingOption                                   `json:"shardingOption"`
	TestApk            *FileReference                                    `json:"testApk"`
	TestPackageID      *string                                           `json:"testPackageId"`
	TestRunnerClass    *string                                           `json:"testRunnerClass"`
	TestTargets        []string                                          `json:"testTargets"`
}
