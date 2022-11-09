import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FileDataExporterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=path" })
  path: string;
}
