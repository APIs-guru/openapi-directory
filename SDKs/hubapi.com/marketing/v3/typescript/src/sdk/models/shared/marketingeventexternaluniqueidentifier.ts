import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MarketingEventExternalUniqueIdentifier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId: number;

  @SpeakeasyMetadata({ data: "json, name=externalAccountId" })
  externalAccountId: string;

  @SpeakeasyMetadata({ data: "json, name=externalEventId" })
  externalEventId: string;
}
