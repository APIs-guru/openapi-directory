import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageEditFields } from "./imageeditfields";



export class ImageEdit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ImageEditFields;
}
