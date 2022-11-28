import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageIdCreateEntry } from "./imageidcreateentry";



export class ImageIdCreateBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Images", elemType: ImageIdCreateEntry })
  images?: ImageIdCreateEntry[];

  @SpeakeasyMetadata({ data: "json, name=TagIds" })
  tagIds?: string[];
}
