package shared

type BiddingFunctionStateEnum string

const (
	BiddingFunctionStateEnumStateUnspecified BiddingFunctionStateEnum = "STATE_UNSPECIFIED"
	BiddingFunctionStateEnumActive           BiddingFunctionStateEnum = "ACTIVE"
	BiddingFunctionStateEnumArchived         BiddingFunctionStateEnum = "ARCHIVED"
)

type BiddingFunctionTypeEnum string

const (
	BiddingFunctionTypeEnumFunctionTypeUnspecified             BiddingFunctionTypeEnum = "FUNCTION_TYPE_UNSPECIFIED"
	BiddingFunctionTypeEnumTurtledoveSimulationBiddingFunction BiddingFunctionTypeEnum = "TURTLEDOVE_SIMULATION_BIDDING_FUNCTION"
	BiddingFunctionTypeEnumFledgeBiddingFunction               BiddingFunctionTypeEnum = "FLEDGE_BIDDING_FUNCTION"
)

// BiddingFunction
// The bidding function to be executed as part of the TURTLEDOVE simulation experiment bidding flow.
type BiddingFunction struct {
	BiddingFunction *string                   `json:"biddingFunction,omitempty"`
	Name            *string                   `json:"name,omitempty"`
	State           *BiddingFunctionStateEnum `json:"state,omitempty"`
	Type            *BiddingFunctionTypeEnum  `json:"type,omitempty"`
}

// BiddingFunctionInput
// The bidding function to be executed as part of the TURTLEDOVE simulation experiment bidding flow.
type BiddingFunctionInput struct {
	BiddingFunction *string                  `json:"biddingFunction,omitempty"`
	Name            *string                  `json:"name,omitempty"`
	Type            *BiddingFunctionTypeEnum `json:"type,omitempty"`
}
