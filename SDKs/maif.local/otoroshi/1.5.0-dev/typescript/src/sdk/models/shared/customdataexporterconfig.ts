import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomDataExporterConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=config" })
  config: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref: string;
}
