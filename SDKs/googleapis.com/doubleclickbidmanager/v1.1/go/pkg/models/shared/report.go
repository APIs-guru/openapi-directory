package shared

type Report struct {
	Key      *ReportKey      `json:"key"`
	Metadata *ReportMetadata `json:"metadata"`
	Params   *Parameters     `json:"params"`
}
