import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImageUrlCreateEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=TagIds" })
  tagIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=Url" })
  url?: string;
}
