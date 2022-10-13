package shared

type ApplicationInfo struct {
	Emails      []string `json:"emails"`
	Instruction *string  `json:"instruction"`
	Uris        []string `json:"uris"`
}
