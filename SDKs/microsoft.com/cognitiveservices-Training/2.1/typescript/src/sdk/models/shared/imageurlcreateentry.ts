import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Region } from "./region";



export class ImageUrlCreateEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regions", elemType: Region })
  regions?: Region[];

  @SpeakeasyMetadata({ data: "json, name=tagIds" })
  tagIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
