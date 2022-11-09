import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Change } from "./change";


// ChangeList
/** 
 * A list of changes for a user.
**/
export class ChangeList extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=items", elemType: shared.Change })
  items?: Change[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=largestChangeId" })
  largestChangeId?: string;

  @Metadata({ data: "json, name=newStartPageToken" })
  newStartPageToken?: string;

  @Metadata({ data: "json, name=nextLink" })
  nextLink?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
