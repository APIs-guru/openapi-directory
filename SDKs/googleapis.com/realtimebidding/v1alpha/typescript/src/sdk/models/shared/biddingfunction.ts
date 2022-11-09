import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum BiddingFunctionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Archived = "ARCHIVED"
}

export enum BiddingFunctionTypeEnum {
    FunctionTypeUnspecified = "FUNCTION_TYPE_UNSPECIFIED"
,    TurtledoveSimulationBiddingFunction = "TURTLEDOVE_SIMULATION_BIDDING_FUNCTION"
,    FledgeBiddingFunction = "FLEDGE_BIDDING_FUNCTION"
}


// BiddingFunction
/** 
 * The bidding function to be executed as part of the TURTLEDOVE simulation experiment bidding flow.
**/
export class BiddingFunction extends SpeakeasyBase {
  @Metadata({ data: "json, name=biddingFunction" })
  biddingFunction?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=state" })
  state?: BiddingFunctionStateEnum;

  @Metadata({ data: "json, name=type" })
  type?: BiddingFunctionTypeEnum;
}
