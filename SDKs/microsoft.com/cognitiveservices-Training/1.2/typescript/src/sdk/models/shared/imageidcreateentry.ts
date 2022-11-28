import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImageIdCreateEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=TagIds" })
  tagIds?: string[];
}
