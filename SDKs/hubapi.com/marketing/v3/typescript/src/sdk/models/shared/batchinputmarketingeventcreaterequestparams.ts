import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MarketingEventCreateRequestParams } from "./marketingeventcreaterequestparams";



export class BatchInputMarketingEventCreateRequestParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputs", elemType: MarketingEventCreateRequestParams })
  inputs: MarketingEventCreateRequestParams[];
}
