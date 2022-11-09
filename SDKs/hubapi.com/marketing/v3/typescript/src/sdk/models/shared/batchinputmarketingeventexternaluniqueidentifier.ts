import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MarketingEventExternalUniqueIdentifier } from "./marketingeventexternaluniqueidentifier";


export class BatchInputMarketingEventExternalUniqueIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=inputs", elemType: shared.MarketingEventExternalUniqueIdentifier })
  inputs: MarketingEventExternalUniqueIdentifier[];
}
