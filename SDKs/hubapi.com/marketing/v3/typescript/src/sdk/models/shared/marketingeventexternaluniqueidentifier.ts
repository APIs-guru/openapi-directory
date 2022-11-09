import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MarketingEventExternalUniqueIdentifier extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId: number;

  @Metadata({ data: "json, name=externalAccountId" })
  externalAccountId: string;

  @Metadata({ data: "json, name=externalEventId" })
  externalEventId: string;
}
