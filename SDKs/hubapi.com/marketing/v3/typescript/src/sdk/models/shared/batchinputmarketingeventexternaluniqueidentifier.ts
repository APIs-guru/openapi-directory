import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MarketingEventExternalUniqueIdentifier } from "./marketingeventexternaluniqueidentifier";



export class BatchInputMarketingEventExternalUniqueIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=inputs", elemType: MarketingEventExternalUniqueIdentifier })
  inputs: MarketingEventExternalUniqueIdentifier[];
}
