import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MarketingEventSubscriber extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=interactionDateTime" })
  interactionDateTime: number;

  @SpeakeasyMetadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=vid" })
  vid?: number;
}
