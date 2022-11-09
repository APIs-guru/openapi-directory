import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LocalizationOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
