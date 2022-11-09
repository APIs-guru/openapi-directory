import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Link } from "./link";


// Links
/** 
 * A collection of links, which are references from this span to a span in the same or different trace.
**/
export class Links extends SpeakeasyBase {
  @Metadata({ data: "json, name=droppedLinksCount" })
  droppedLinksCount?: number;

  @Metadata({ data: "json, name=link", elemType: shared.Link })
  link?: Link[];
}
