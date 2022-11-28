import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ResponseHeader } from "./responseheader";
import { Policy } from "./policy";



export class PoliciesPatchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: ResponseHeader;

  @SpeakeasyMetadata({ data: "json, name=policy" })
  policy?: Policy;
}
