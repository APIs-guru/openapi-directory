package shared



type TaskRunnerSettings struct {
    Alsologtostderr *bool `json:"alsologtostderr,omitempty"`
    BaseTaskDir *string `json:"baseTaskDir,omitempty"`
    BaseURL *string `json:"baseUrl,omitempty"`
    CommandlinesFileName *string `json:"commandlinesFileName,omitempty"`
    ContinueOnException *bool `json:"continueOnException,omitempty"`
    DataflowAPIVersion *string `json:"dataflowApiVersion,omitempty"`
    HarnessCommand *string `json:"harnessCommand,omitempty"`
    LanguageHint *string `json:"languageHint,omitempty"`
    LogDir *string `json:"logDir,omitempty"`
    LogToSerialconsole *bool `json:"logToSerialconsole,omitempty"`
    LogUploadLocation *string `json:"logUploadLocation,omitempty"`
    OauthScopes []string `json:"oauthScopes,omitempty"`
    ParallelWorkerSettings *WorkerSettings `json:"parallelWorkerSettings,omitempty"`
    StreamingWorkerMainClass *string `json:"streamingWorkerMainClass,omitempty"`
    TaskGroup *string `json:"taskGroup,omitempty"`
    TaskUser *string `json:"taskUser,omitempty"`
    TempStoragePrefix *string `json:"tempStoragePrefix,omitempty"`
    VMID *string `json:"vmId,omitempty"`
    WorkflowFileName *string `json:"workflowFileName,omitempty"`
    
}

