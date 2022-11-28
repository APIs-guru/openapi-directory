import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageUrlCreateEntry } from "./imageurlcreateentry";



export class ImageUrlCreateBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=images", elemType: ImageUrlCreateEntry })
  images?: ImageUrlCreateEntry[];

  @SpeakeasyMetadata({ data: "json, name=tagIds" })
  tagIds?: string[];
}
