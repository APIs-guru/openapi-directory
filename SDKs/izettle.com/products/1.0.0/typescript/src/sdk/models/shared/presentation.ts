import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Presentation extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalImageUrls" })
  additionalImageUrls?: string[];

  @Metadata({ data: "json, name=displayImageUrl" })
  displayImageUrl?: string;

  @Metadata({ data: "json, name=mediaUrls" })
  mediaUrls?: string[];
}
