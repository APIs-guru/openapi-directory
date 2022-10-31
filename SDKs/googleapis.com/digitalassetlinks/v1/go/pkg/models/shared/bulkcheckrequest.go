package shared

type BulkCheckRequest struct {
	AllowGoogleInternalDataSources *bool               `json:"allowGoogleInternalDataSources,omitempty"`
	DefaultRelation                *string             `json:"defaultRelation,omitempty"`
	DefaultSource                  *Asset              `json:"defaultSource,omitempty"`
	DefaultTarget                  *Asset              `json:"defaultTarget,omitempty"`
	SkipCacheLookup                *bool               `json:"skipCacheLookup,omitempty"`
	Statements                     []StatementTemplate `json:"statements,omitempty"`
}
