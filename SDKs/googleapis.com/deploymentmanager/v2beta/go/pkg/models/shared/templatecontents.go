package shared




type TemplateContentsInterpreterEnum string

const (
    TemplateContentsInterpreterEnumUnknownInterpreter TemplateContentsInterpreterEnum = "UNKNOWN_INTERPRETER"
TemplateContentsInterpreterEnumPython TemplateContentsInterpreterEnum = "PYTHON"
TemplateContentsInterpreterEnumJinja TemplateContentsInterpreterEnum = "JINJA"
)


type TemplateContents struct {
    Imports []ImportFile `json:"imports,omitempty"`
    Interpreter *TemplateContentsInterpreterEnum `json:"interpreter,omitempty"`
    MainTemplate *string `json:"mainTemplate,omitempty"`
    Schema *string `json:"schema,omitempty"`
    Template *string `json:"template,omitempty"`
    
}

