package shared

type Statement struct {
	ParamTypes map[string]Type        `json:"paramTypes"`
	Params     map[string]interface{} `json:"params"`
	SQL        *string                `json:"sql"`
}
