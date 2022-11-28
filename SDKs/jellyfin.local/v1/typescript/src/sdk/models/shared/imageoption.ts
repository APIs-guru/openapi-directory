import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageTypeEnum } from "./imagetypeenum";



export class ImageOption extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=MinWidth" })
  minWidth?: number;

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: ImageTypeEnum;
}
