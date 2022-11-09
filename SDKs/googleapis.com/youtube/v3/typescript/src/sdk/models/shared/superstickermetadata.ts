import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SuperStickerMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=altText" })
  altText?: string;

  @Metadata({ data: "json, name=altTextLanguage" })
  altTextLanguage?: string;

  @Metadata({ data: "json, name=stickerId" })
  stickerId?: string;
}
