import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SubtitleDeliveryMethodEnum } from "./subtitledeliverymethodenum";


export class SubtitleProfile extends SpeakeasyBase {
  @Metadata({ data: "json, name=Container" })
  container?: string;

  @Metadata({ data: "json, name=DidlMode" })
  didlMode?: string;

  @Metadata({ data: "json, name=Format" })
  format?: string;

  @Metadata({ data: "json, name=Language" })
  language?: string;

  @Metadata({ data: "json, name=Method" })
  method?: SubtitleDeliveryMethodEnum;
}
