import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageTagCreateEntry } from "./imagetagcreateentry";



export class ImageTagCreateBatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tags", elemType: ImageTagCreateEntry })
  tags?: ImageTagCreateEntry[];
}
