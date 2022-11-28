import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { HeaderMatchTypeEnum } from "./headermatchtypeenum";



export class HttpHeaderInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Match" })
  match?: HeaderMatchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
