import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LibraryImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=imageUrls" })
  imageUrls?: string[];
}
