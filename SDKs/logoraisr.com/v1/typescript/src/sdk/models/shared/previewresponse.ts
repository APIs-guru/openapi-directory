import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviewResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=preview_img_url" })
  previewImgUrl?: string;
}
