import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { HeaderMatchTypeEnum } from "./headermatchtypeenum";


export class HttpHeaderInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=Match" })
  match?: HeaderMatchTypeEnum;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
