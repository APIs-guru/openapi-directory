package shared

type Create struct {
	Copy   *Copy                  `json:"copy"`
	New    map[string]interface{} `json:"new"`
	Upload map[string]interface{} `json:"upload"`
}
