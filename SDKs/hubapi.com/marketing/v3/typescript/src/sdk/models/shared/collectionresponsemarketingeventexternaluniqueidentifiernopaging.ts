import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MarketingEventExternalUniqueIdentifier } from "./marketingeventexternaluniqueidentifier";



export class CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=results", elemType: MarketingEventExternalUniqueIdentifier })
  results: MarketingEventExternalUniqueIdentifier[];
}
