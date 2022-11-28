import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum BiddingFunctionStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Archived = "ARCHIVED"
}

export enum BiddingFunctionTypeEnum {
    FunctionTypeUnspecified = "FUNCTION_TYPE_UNSPECIFIED",
    TurtledoveSimulationBiddingFunction = "TURTLEDOVE_SIMULATION_BIDDING_FUNCTION",
    FledgeBiddingFunction = "FLEDGE_BIDDING_FUNCTION"
}


// BiddingFunction
/** 
 * The bidding function to be executed as part of the TURTLEDOVE simulation experiment bidding flow.
**/
export class BiddingFunction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=biddingFunction" })
  biddingFunction?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: BiddingFunctionStateEnum;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: BiddingFunctionTypeEnum;
}


// BiddingFunctionInput
/** 
 * The bidding function to be executed as part of the TURTLEDOVE simulation experiment bidding flow.
**/
export class BiddingFunctionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=biddingFunction" })
  biddingFunction?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: BiddingFunctionTypeEnum;
}
