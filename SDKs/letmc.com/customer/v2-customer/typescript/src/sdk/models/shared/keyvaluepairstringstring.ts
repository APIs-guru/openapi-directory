import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class KeyValuePairStringString extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
