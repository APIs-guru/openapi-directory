package shared

type CustomBiddingScriptStateEnum string

const (
	CustomBiddingScriptStateEnumStateUnspecified CustomBiddingScriptStateEnum = "STATE_UNSPECIFIED"
	CustomBiddingScriptStateEnumAccepted         CustomBiddingScriptStateEnum = "ACCEPTED"
	CustomBiddingScriptStateEnumRejected         CustomBiddingScriptStateEnum = "REJECTED"
	CustomBiddingScriptStateEnumPending          CustomBiddingScriptStateEnum = "PENDING"
)

type CustomBiddingScript struct {
	Active                   *bool                         `json:"active"`
	CreateTime               *string                       `json:"createTime"`
	CustomBiddingAlgorithmID *string                       `json:"customBiddingAlgorithmId"`
	CustomBiddingScriptID    *string                       `json:"customBiddingScriptId"`
	Errors                   []ScriptError                 `json:"errors"`
	Name                     *string                       `json:"name"`
	Script                   *CustomBiddingScriptRef       `json:"script"`
	State                    *CustomBiddingScriptStateEnum `json:"state"`
}
