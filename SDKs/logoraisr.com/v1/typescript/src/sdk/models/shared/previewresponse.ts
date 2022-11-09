import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PreviewResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=preview_img_url" })
  previewImgUrl?: string;
}
