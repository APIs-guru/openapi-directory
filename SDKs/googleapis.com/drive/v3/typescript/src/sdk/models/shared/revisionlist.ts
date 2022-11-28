import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Revision } from "./revision";



// RevisionList
/** 
 * A list of revisions of a file.
**/
export class RevisionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=revisions", elemType: Revision })
  revisions?: Revision[];
}
