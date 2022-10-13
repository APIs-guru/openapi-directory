package shared

type TemplateContentsInterpreterEnum string

const (
	TemplateContentsInterpreterEnumUnknownInterpreter TemplateContentsInterpreterEnum = "UNKNOWN_INTERPRETER"
	TemplateContentsInterpreterEnumPython             TemplateContentsInterpreterEnum = "PYTHON"
	TemplateContentsInterpreterEnumJinja              TemplateContentsInterpreterEnum = "JINJA"
)

type TemplateContents struct {
	Imports      []ImportFile                     `json:"imports"`
	Interpreter  *TemplateContentsInterpreterEnum `json:"interpreter"`
	MainTemplate *string                          `json:"mainTemplate"`
	Schema       *string                          `json:"schema"`
	Template     *string                          `json:"template"`
}
