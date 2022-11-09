import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ChildReference } from "./childreference";


// ChildList
/** 
 * A list of children of a file.
**/
export class ChildList extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=items", elemType: shared.ChildReference })
  items?: ChildReference[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextLink" })
  nextLink?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
