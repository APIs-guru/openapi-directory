package shared

type LighthouseResultV5 struct {
	Audits            map[string]LighthouseAuditResultV5 `json:"audits"`
	Categories        *Categories                        `json:"categories"`
	CategoryGroups    map[string]CategoryGroupV5         `json:"categoryGroups"`
	ConfigSettings    *ConfigSettings                    `json:"configSettings"`
	Environment       *Environment                       `json:"environment"`
	FetchTime         *string                            `json:"fetchTime"`
	FinalURL          *string                            `json:"finalUrl"`
	I18n              *I18n                              `json:"i18n"`
	LighthouseVersion *string                            `json:"lighthouseVersion"`
	RequestedURL      *string                            `json:"requestedUrl"`
	RunWarnings       []interface{}                      `json:"runWarnings"`
	RuntimeError      *RuntimeError                      `json:"runtimeError"`
	StackPacks        []StackPack                        `json:"stackPacks"`
	Timing            *Timing                            `json:"timing"`
	UserAgent         *string                            `json:"userAgent"`
}
