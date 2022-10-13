package shared

type Content struct {
	Files    []File  `json:"files"`
	ScriptID *string `json:"scriptId"`
}
