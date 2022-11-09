import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PopulateVersionFilesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=files" })
  files?: Map<string, string>;
}
