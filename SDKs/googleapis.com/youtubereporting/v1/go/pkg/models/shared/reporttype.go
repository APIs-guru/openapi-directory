package shared

type ReportType struct {
	DeprecateTime *string `json:"deprecateTime"`
	ID            *string `json:"id"`
	Name          *string `json:"name"`
	SystemManaged *bool   `json:"systemManaged"`
}
