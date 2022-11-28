package shared

type CustomBiddingScriptStateEnum string

const (
	CustomBiddingScriptStateEnumStateUnspecified CustomBiddingScriptStateEnum = "STATE_UNSPECIFIED"
	CustomBiddingScriptStateEnumAccepted         CustomBiddingScriptStateEnum = "ACCEPTED"
	CustomBiddingScriptStateEnumRejected         CustomBiddingScriptStateEnum = "REJECTED"
	CustomBiddingScriptStateEnumPending          CustomBiddingScriptStateEnum = "PENDING"
)

// CustomBiddingScriptInput
// A single custom bidding script.
type CustomBiddingScriptInput struct {
	Script *CustomBiddingScriptRef `json:"script,omitempty"`
}

// CustomBiddingScript
// A single custom bidding script.
type CustomBiddingScript struct {
	Active                   *bool                         `json:"active,omitempty"`
	CreateTime               *string                       `json:"createTime,omitempty"`
	CustomBiddingAlgorithmID *string                       `json:"customBiddingAlgorithmId,omitempty"`
	CustomBiddingScriptID    *string                       `json:"customBiddingScriptId,omitempty"`
	Errors                   []ScriptError                 `json:"errors,omitempty"`
	Name                     *string                       `json:"name,omitempty"`
	Script                   *CustomBiddingScriptRef       `json:"script,omitempty"`
	State                    *CustomBiddingScriptStateEnum `json:"state,omitempty"`
}
