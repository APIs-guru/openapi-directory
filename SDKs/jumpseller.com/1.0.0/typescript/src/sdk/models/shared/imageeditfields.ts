import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImageEditFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=url" })
  url?: string;
}
