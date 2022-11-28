import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Region } from "./region";



export class ImageFileCreateEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents" })
  contents?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=regions", elemType: Region })
  regions?: Region[];

  @SpeakeasyMetadata({ data: "json, name=tagIds" })
  tagIds?: string[];
}
