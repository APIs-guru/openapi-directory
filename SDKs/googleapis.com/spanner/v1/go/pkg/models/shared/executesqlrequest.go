package shared

type ExecuteSQLRequestQueryModeEnum string

const (
	ExecuteSQLRequestQueryModeEnumNormal  ExecuteSQLRequestQueryModeEnum = "NORMAL"
	ExecuteSQLRequestQueryModeEnumPlan    ExecuteSQLRequestQueryModeEnum = "PLAN"
	ExecuteSQLRequestQueryModeEnumProfile ExecuteSQLRequestQueryModeEnum = "PROFILE"
)

type ExecuteSQLRequest struct {
	ParamTypes     map[string]Type                 `json:"paramTypes"`
	Params         map[string]interface{}          `json:"params"`
	PartitionToken *string                         `json:"partitionToken"`
	QueryMode      *ExecuteSQLRequestQueryModeEnum `json:"queryMode"`
	QueryOptions   *QueryOptions                   `json:"queryOptions"`
	RequestOptions *RequestOptions                 `json:"requestOptions"`
	ResumeToken    *string                         `json:"resumeToken"`
	Seqno          *string                         `json:"seqno"`
	SQL            *string                         `json:"sql"`
	Transaction    *TransactionSelector            `json:"transaction"`
}
