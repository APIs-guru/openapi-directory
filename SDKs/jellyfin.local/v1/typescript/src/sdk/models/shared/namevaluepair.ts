import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NameValuePair extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
