import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ResponseHeader } from "./responseheader";
import { Policy } from "./policy";


export class PoliciesPatchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=header" })
  header?: ResponseHeader;

  @Metadata({ data: "json, name=policy" })
  policy?: Policy;
}
