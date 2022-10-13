package shared

type BulkCheckRequest struct {
	AllowGoogleInternalDataSources *bool               `json:"allowGoogleInternalDataSources"`
	DefaultRelation                *string             `json:"defaultRelation"`
	DefaultSource                  *Asset              `json:"defaultSource"`
	DefaultTarget                  *Asset              `json:"defaultTarget"`
	SkipCacheLookup                *bool               `json:"skipCacheLookup"`
	Statements                     []StatementTemplate `json:"statements"`
}
