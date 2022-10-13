package shared

type Spreadsheet struct {
	DataSourceSchedules []DataSourceRefreshSchedule `json:"dataSourceSchedules"`
	DataSources         []DataSource                `json:"dataSources"`
	DeveloperMetadata   []DeveloperMetadata         `json:"developerMetadata"`
	NamedRanges         []NamedRange                `json:"namedRanges"`
	Properties          *SpreadsheetProperties      `json:"properties"`
	Sheets              []Sheet                     `json:"sheets"`
	SpreadsheetID       *string                     `json:"spreadsheetId"`
	SpreadsheetURL      *string                     `json:"spreadsheetUrl"`
}
