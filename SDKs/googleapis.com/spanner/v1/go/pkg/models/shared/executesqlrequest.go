package shared

type ExecuteSQLRequestQueryModeEnum string

const (
	ExecuteSQLRequestQueryModeEnumNormal  ExecuteSQLRequestQueryModeEnum = "NORMAL"
	ExecuteSQLRequestQueryModeEnumPlan    ExecuteSQLRequestQueryModeEnum = "PLAN"
	ExecuteSQLRequestQueryModeEnumProfile ExecuteSQLRequestQueryModeEnum = "PROFILE"
)

// ExecuteSQLRequest
// The request for ExecuteSql and ExecuteStreamingSql.
type ExecuteSQLRequest struct {
	ParamTypes     map[string]Type                 `json:"paramTypes,omitempty"`
	Params         map[string]interface{}          `json:"params,omitempty"`
	PartitionToken *string                         `json:"partitionToken,omitempty"`
	QueryMode      *ExecuteSQLRequestQueryModeEnum `json:"queryMode,omitempty"`
	QueryOptions   *QueryOptions                   `json:"queryOptions,omitempty"`
	RequestOptions *RequestOptions                 `json:"requestOptions,omitempty"`
	ResumeToken    *string                         `json:"resumeToken,omitempty"`
	Seqno          *string                         `json:"seqno,omitempty"`
	SQL            *string                         `json:"sql,omitempty"`
	Transaction    *TransactionSelector            `json:"transaction,omitempty"`
}
