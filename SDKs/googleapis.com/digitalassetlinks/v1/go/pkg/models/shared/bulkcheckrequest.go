package shared

// BulkCheckRequest
// Message used to check for the existence of multiple digital asset links within a single RPC.
type BulkCheckRequest struct {
	AllowGoogleInternalDataSources *bool               `json:"allowGoogleInternalDataSources,omitempty"`
	DefaultRelation                *string             `json:"defaultRelation,omitempty"`
	DefaultSource                  *Asset              `json:"defaultSource,omitempty"`
	DefaultTarget                  *Asset              `json:"defaultTarget,omitempty"`
	SkipCacheLookup                *bool               `json:"skipCacheLookup,omitempty"`
	Statements                     []StatementTemplate `json:"statements,omitempty"`
}
