import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SuperStickerMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=altText" })
  altText?: string;

  @SpeakeasyMetadata({ data: "json, name=altTextLanguage" })
  altTextLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=stickerId" })
  stickerId?: string;
}
