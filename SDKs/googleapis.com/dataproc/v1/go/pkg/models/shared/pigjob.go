package shared

type PigJob struct {
	ContinueOnFailure *bool             `json:"continueOnFailure"`
	JarFileUris       []string          `json:"jarFileUris"`
	LoggingConfig     *LoggingConfig    `json:"loggingConfig"`
	Properties        map[string]string `json:"properties"`
	QueryFileURI      *string           `json:"queryFileUri"`
	QueryList         *QueryList        `json:"queryList"`
	ScriptVariables   map[string]string `json:"scriptVariables"`
}
