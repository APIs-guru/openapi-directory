package shared

type LiasettingsCustomBatchResponseEntry struct {
	BatchID          *int64             `json:"batchId,omitempty"`
	Errors           *Errors            `json:"errors,omitempty"`
	GmbAccounts      *GmbAccounts       `json:"gmbAccounts,omitempty"`
	Kind             *string            `json:"kind,omitempty"`
	LiaSettings      *LiaSettings       `json:"liaSettings,omitempty"`
	PosDataProviders []PosDataProviders `json:"posDataProviders,omitempty"`
}
