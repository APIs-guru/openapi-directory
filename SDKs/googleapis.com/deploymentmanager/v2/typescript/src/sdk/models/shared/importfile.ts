import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ImportFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
