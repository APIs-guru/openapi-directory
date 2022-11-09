import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PulseMcqOption extends SpeakeasyBase {
  @Metadata({ data: "json, name=option" })
  option?: string;

  @Metadata({ data: "json, name=value" })
  value?: boolean;
}
