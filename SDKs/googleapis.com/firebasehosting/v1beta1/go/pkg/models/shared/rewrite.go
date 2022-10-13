package shared

type Rewrite struct {
	DynamicLinks   *bool            `json:"dynamicLinks"`
	Function       *string          `json:"function"`
	FunctionRegion *string          `json:"functionRegion"`
	Glob           *string          `json:"glob"`
	Path           *string          `json:"path"`
	Regex          *string          `json:"regex"`
	Run            *CloudRunRewrite `json:"run"`
}
