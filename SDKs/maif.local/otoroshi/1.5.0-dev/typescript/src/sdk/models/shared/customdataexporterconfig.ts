import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomDataExporterConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=config" })
  config: Map<string, string>;

  @Metadata({ data: "json, name=ref" })
  ref: string;
}
