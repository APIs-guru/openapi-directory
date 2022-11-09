import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Revision } from "./revision";


// RevisionList
/** 
 * A list of revisions of a file.
**/
export class RevisionList extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=revisions", elemType: shared.Revision })
  revisions?: Revision[];
}
