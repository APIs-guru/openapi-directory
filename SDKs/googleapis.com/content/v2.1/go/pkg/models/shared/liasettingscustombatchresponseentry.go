package shared

type LiasettingsCustomBatchResponseEntry struct {
	BatchID          *int64             `json:"batchId"`
	Errors           *Errors            `json:"errors"`
	GmbAccounts      *GmbAccounts       `json:"gmbAccounts"`
	Kind             *string            `json:"kind"`
	LiaSettings      *LiaSettings       `json:"liaSettings"`
	PosDataProviders []PosDataProviders `json:"posDataProviders"`
}
