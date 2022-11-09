import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageTypeEnum } from "./imagetypeenum";


export class ImageOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=MinWidth" })
  minWidth?: number;

  @Metadata({ data: "json, name=Type" })
  type?: ImageTypeEnum;
}
