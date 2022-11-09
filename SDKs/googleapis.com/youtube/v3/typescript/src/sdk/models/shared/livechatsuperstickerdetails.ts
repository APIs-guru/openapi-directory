import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SuperStickerMetadata } from "./superstickermetadata";


export class LiveChatSuperStickerDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=amountDisplayString" })
  amountDisplayString?: string;

  @Metadata({ data: "json, name=amountMicros" })
  amountMicros?: string;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=superStickerMetadata" })
  superStickerMetadata?: SuperStickerMetadata;

  @Metadata({ data: "json, name=tier" })
  tier?: number;
}
