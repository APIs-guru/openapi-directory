import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImageEditFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
