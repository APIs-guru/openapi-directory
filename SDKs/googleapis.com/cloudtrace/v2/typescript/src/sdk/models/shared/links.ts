import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Link } from "./link";



// Links
/** 
 * A collection of links, which are references from this span to a span in the same or different trace.
**/
export class Links extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=droppedLinksCount" })
  droppedLinksCount?: number;

  @SpeakeasyMetadata({ data: "json, name=link", elemType: Link })
  link?: Link[];
}
