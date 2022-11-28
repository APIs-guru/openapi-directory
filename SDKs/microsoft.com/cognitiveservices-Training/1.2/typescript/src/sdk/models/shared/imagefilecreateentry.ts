import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImageFileCreateEntry extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Contents" })
  contents?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=TagIds" })
  tagIds?: string[];
}
