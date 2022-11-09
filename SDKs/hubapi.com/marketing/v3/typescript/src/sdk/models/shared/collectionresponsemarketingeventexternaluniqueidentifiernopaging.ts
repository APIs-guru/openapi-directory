import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MarketingEventExternalUniqueIdentifier } from "./marketingeventexternaluniqueidentifier";


export class CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging extends SpeakeasyBase {
  @Metadata({ data: "json, name=results", elemType: shared.MarketingEventExternalUniqueIdentifier })
  results: MarketingEventExternalUniqueIdentifier[];
}
