import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageEditFields } from "./imageeditfields";


export class ImageEdit extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: ImageEditFields;
}
