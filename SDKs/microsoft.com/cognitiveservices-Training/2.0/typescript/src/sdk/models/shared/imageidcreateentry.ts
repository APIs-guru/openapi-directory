import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Region } from "./region";



export class ImageIdCreateEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=regions", elemType: Region })
  regions?: Region[];

  @SpeakeasyMetadata({ data: "json, name=tagIds" })
  tagIds?: string[];
}
