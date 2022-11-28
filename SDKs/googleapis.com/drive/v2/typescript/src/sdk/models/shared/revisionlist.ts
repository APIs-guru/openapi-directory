import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Revision } from "./revision";



// RevisionList
/** 
 * A list of revisions of a file.
**/
export class RevisionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=items", elemType: Revision })
  items?: Revision[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=selfLink" })
  selfLink?: string;
}
