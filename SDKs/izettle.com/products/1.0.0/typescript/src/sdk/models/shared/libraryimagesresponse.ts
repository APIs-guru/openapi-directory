import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LibraryImagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=imageUrls" })
  imageUrls?: string[];
}
