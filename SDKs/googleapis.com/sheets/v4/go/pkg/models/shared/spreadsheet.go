package shared

type Spreadsheet struct {
	DataSourceSchedules []DataSourceRefreshSchedule `json:"dataSourceSchedules,omitempty"`
	DataSources         []DataSource                `json:"dataSources,omitempty"`
	DeveloperMetadata   []DeveloperMetadata         `json:"developerMetadata,omitempty"`
	NamedRanges         []NamedRange                `json:"namedRanges,omitempty"`
	Properties          *SpreadsheetProperties      `json:"properties,omitempty"`
	Sheets              []Sheet                     `json:"sheets,omitempty"`
	SpreadsheetID       *string                     `json:"spreadsheetId,omitempty"`
	SpreadsheetURL      *string                     `json:"spreadsheetUrl,omitempty"`
}
