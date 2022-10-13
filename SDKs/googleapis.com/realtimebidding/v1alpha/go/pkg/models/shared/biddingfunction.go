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

type BiddingFunction struct {
	BiddingFunction *string                   `json:"biddingFunction"`
	Name            *string                   `json:"name"`
	State           *BiddingFunctionStateEnum `json:"state"`
	Type            *BiddingFunctionTypeEnum  `json:"type"`
}
