import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Presentation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalImageUrls" })
  additionalImageUrls?: string[];

  @SpeakeasyMetadata({ data: "json, name=displayImageUrl" })
  displayImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=mediaUrls" })
  mediaUrls?: string[];
}
