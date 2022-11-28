import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageFileCreateEntry } from "./imagefilecreateentry";



export class ImageFileCreateBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=images", elemType: ImageFileCreateEntry })
  images?: ImageFileCreateEntry[];

  @SpeakeasyMetadata({ data: "json, name=tagIds" })
  tagIds?: string[];
}
