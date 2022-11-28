import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MarketingEventEmailSubscriber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contactProperties" })
  contactProperties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=interactionDateTime" })
  interactionDateTime: number;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, string>;
}
