import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FileDataExporterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=path" })
  path: string;
}
