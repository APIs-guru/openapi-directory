import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageUrlCreateEntry } from "./imageurlcreateentry";



export class ImageUrlCreateBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Images", elemType: ImageUrlCreateEntry })
  images?: ImageUrlCreateEntry[];

  @SpeakeasyMetadata({ data: "json, name=TagIds" })
  tagIds?: string[];
}
