package shared

type StageExecutionDetails struct {
	NextPageToken *string         `json:"nextPageToken"`
	Workers       []WorkerDetails `json:"workers"`
}
