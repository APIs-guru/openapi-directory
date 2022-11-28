import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";



// Notice
/** 
 * Notices object defined in [section 4.3 of RFC 7483](https://tools.ietf.org/html/rfc7483#section-4.3).
**/
export class Notice extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string[];

  @SpeakeasyMetadata({ data: "json, name=links", elemType: Link })
  links?: Link[];

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
