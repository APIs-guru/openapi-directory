import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MarketingEventSubscriber extends SpeakeasyBase {
  @Metadata({ data: "json, name=interactionDateTime" })
  interactionDateTime: number;

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, string>;

  @Metadata({ data: "json, name=vid" })
  vid?: number;
}
