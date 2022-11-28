import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageIdCreateEntry } from "./imageidcreateentry";



export class ImageIdCreateBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=images", elemType: ImageIdCreateEntry })
  images?: ImageIdCreateEntry[];

  @SpeakeasyMetadata({ data: "json, name=tagIds" })
  tagIds?: string[];
}
