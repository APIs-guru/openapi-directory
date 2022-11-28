import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PopulateVersionFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=files" })
  files?: Map<string, string>;
}
