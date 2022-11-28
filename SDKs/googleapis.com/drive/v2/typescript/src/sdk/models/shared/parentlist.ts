import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ParentReference } from "./parentreference";



// ParentList
/** 
 * A list of a file's parents.
**/
export class ParentList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: ParentReference })
  items?: ParentReference[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
