package shared

type TaskRunnerSettings struct {
	Alsologtostderr          *bool           `json:"alsologtostderr"`
	BaseTaskDir              *string         `json:"baseTaskDir"`
	BaseURL                  *string         `json:"baseUrl"`
	CommandlinesFileName     *string         `json:"commandlinesFileName"`
	ContinueOnException      *bool           `json:"continueOnException"`
	DataflowAPIVersion       *string         `json:"dataflowApiVersion"`
	HarnessCommand           *string         `json:"harnessCommand"`
	LanguageHint             *string         `json:"languageHint"`
	LogDir                   *string         `json:"logDir"`
	LogToSerialconsole       *bool           `json:"logToSerialconsole"`
	LogUploadLocation        *string         `json:"logUploadLocation"`
	OauthScopes              []string        `json:"oauthScopes"`
	ParallelWorkerSettings   *WorkerSettings `json:"parallelWorkerSettings"`
	StreamingWorkerMainClass *string         `json:"streamingWorkerMainClass"`
	TaskGroup                *string         `json:"taskGroup"`
	TaskUser                 *string         `json:"taskUser"`
	TempStoragePrefix        *string         `json:"tempStoragePrefix"`
	VMID                     *string         `json:"vmId"`
	WorkflowFileName         *string         `json:"workflowFileName"`
}
