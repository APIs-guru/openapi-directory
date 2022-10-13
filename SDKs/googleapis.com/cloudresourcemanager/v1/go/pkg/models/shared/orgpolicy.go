package shared

type OrgPolicy struct {
	BooleanPolicy  *BooleanPolicy         `json:"booleanPolicy"`
	Constraint     *string                `json:"constraint"`
	Etag           *string                `json:"etag"`
	ListPolicy     *ListPolicy            `json:"listPolicy"`
	RestoreDefault map[string]interface{} `json:"restoreDefault"`
	UpdateTime     *string                `json:"updateTime"`
	Version        *int32                 `json:"version"`
}
