import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MarketingEventCreateRequestParams } from "./marketingeventcreaterequestparams";


export class BatchInputMarketingEventCreateRequestParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputs", elemType: shared.MarketingEventCreateRequestParams })
  inputs: MarketingEventCreateRequestParams[];
}
