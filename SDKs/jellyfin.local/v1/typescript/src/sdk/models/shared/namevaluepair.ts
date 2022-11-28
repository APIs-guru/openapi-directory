import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NameValuePair extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
