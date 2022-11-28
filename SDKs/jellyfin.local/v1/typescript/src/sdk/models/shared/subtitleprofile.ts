import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SubtitleDeliveryMethodEnum } from "./subtitledeliverymethodenum";



export class SubtitleProfile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Container" })
  container?: string;

  @SpeakeasyMetadata({ data: "json, name=DidlMode" })
  didlMode?: string;

  @SpeakeasyMetadata({ data: "json, name=Format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=Language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=Method" })
  method?: SubtitleDeliveryMethodEnum;
}
