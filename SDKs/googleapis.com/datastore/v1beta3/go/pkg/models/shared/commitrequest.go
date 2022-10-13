package shared

type CommitRequestModeEnum string

const (
	CommitRequestModeEnumModeUnspecified  CommitRequestModeEnum = "MODE_UNSPECIFIED"
	CommitRequestModeEnumTransactional    CommitRequestModeEnum = "TRANSACTIONAL"
	CommitRequestModeEnumNonTransactional CommitRequestModeEnum = "NON_TRANSACTIONAL"
)

type CommitRequest struct {
	Mode        *CommitRequestModeEnum `json:"mode"`
	Mutations   []Mutation             `json:"mutations"`
	Transaction *string                `json:"transaction"`
}
