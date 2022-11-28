import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SuperStickerMetadata } from "./superstickermetadata";



export class LiveChatSuperStickerDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amountDisplayString" })
  amountDisplayString?: string;

  @SpeakeasyMetadata({ data: "json, name=amountMicros" })
  amountMicros?: string;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=superStickerMetadata" })
  superStickerMetadata?: SuperStickerMetadata;

  @SpeakeasyMetadata({ data: "json, name=tier" })
  tier?: number;
}
