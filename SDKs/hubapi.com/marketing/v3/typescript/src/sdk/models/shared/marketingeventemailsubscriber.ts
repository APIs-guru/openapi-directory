import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MarketingEventEmailSubscriber extends SpeakeasyBase {
  @Metadata({ data: "json, name=contactProperties" })
  contactProperties?: Map<string, string>;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=interactionDateTime" })
  interactionDateTime: number;

  @Metadata({ data: "json, name=properties" })
  properties?: Map<string, string>;
}
