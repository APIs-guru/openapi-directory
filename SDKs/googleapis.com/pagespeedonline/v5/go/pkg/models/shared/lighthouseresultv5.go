package shared

// LighthouseResultV5
// The Lighthouse result object.
type LighthouseResultV5 struct {
	Audits            map[string]LighthouseAuditResultV5 `json:"audits,omitempty"`
	Categories        *Categories                        `json:"categories,omitempty"`
	CategoryGroups    map[string]CategoryGroupV5         `json:"categoryGroups,omitempty"`
	ConfigSettings    *ConfigSettings                    `json:"configSettings,omitempty"`
	Environment       *Environment                       `json:"environment,omitempty"`
	FetchTime         *string                            `json:"fetchTime,omitempty"`
	FinalURL          *string                            `json:"finalUrl,omitempty"`
	I18n              *I18n                              `json:"i18n,omitempty"`
	LighthouseVersion *string                            `json:"lighthouseVersion,omitempty"`
	RequestedURL      *string                            `json:"requestedUrl,omitempty"`
	RunWarnings       []interface{}                      `json:"runWarnings,omitempty"`
	RuntimeError      *RuntimeError                      `json:"runtimeError,omitempty"`
	StackPacks        []StackPack                        `json:"stackPacks,omitempty"`
	Timing            *Timing                            `json:"timing,omitempty"`
	UserAgent         *string                            `json:"userAgent,omitempty"`
}
