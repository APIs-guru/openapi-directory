import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageFields } from "./imagefields";



export class Image extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=image" })
  image?: ImageFields;
}
