import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageFields } from "./imagefields";


export class Image extends SpeakeasyBase {
  @Metadata({ data: "json, name=image" })
  image?: ImageFields;
}
