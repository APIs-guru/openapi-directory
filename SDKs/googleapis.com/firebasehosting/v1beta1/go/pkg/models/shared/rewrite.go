package shared

type Rewrite struct {
	DynamicLinks   *bool            `json:"dynamicLinks,omitempty"`
	Function       *string          `json:"function,omitempty"`
	FunctionRegion *string          `json:"functionRegion,omitempty"`
	Glob           *string          `json:"glob,omitempty"`
	Path           *string          `json:"path,omitempty"`
	Regex          *string          `json:"regex,omitempty"`
	Run            *CloudRunRewrite `json:"run,omitempty"`
}
