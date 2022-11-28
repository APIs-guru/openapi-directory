import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BiddingFunctionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Archived = "ARCHIVED"
}
export declare enum BiddingFunctionTypeEnum {
    FunctionTypeUnspecified = "FUNCTION_TYPE_UNSPECIFIED",
    TurtledoveSimulationBiddingFunction = "TURTLEDOVE_SIMULATION_BIDDING_FUNCTION",
    FledgeBiddingFunction = "FLEDGE_BIDDING_FUNCTION"
}
/**
 * The bidding function to be executed as part of the TURTLEDOVE simulation experiment bidding flow.
**/
export declare class BiddingFunction extends SpeakeasyBase {
    biddingFunction?: string;
    name?: string;
    state?: BiddingFunctionStateEnum;
    type?: BiddingFunctionTypeEnum;
}
/**
 * The bidding function to be executed as part of the TURTLEDOVE simulation experiment bidding flow.
**/
export declare class BiddingFunctionInput extends SpeakeasyBase {
    biddingFunction?: string;
    name?: string;
    type?: BiddingFunctionTypeEnum;
}
