package shared

type Statement struct {
	ParamTypes map[string]Type        `json:"paramTypes,omitempty"`
	Params     map[string]interface{} `json:"params,omitempty"`
	SQL        *string                `json:"sql,omitempty"`
}
