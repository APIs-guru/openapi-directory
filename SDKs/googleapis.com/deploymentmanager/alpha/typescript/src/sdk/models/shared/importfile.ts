import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ImportFile extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
