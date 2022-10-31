package shared

type CommitRequestModeEnum string

const (
	CommitRequestModeEnumModeUnspecified  CommitRequestModeEnum = "MODE_UNSPECIFIED"
	CommitRequestModeEnumTransactional    CommitRequestModeEnum = "TRANSACTIONAL"
	CommitRequestModeEnumNonTransactional CommitRequestModeEnum = "NON_TRANSACTIONAL"
)

type CommitRequest struct {
	Mode        *CommitRequestModeEnum `json:"mode,omitempty"`
	Mutations   []Mutation             `json:"mutations,omitempty"`
	Transaction *string                `json:"transaction,omitempty"`
}
