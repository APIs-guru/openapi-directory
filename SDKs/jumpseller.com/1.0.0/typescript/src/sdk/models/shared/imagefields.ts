import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImageFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
