import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Change } from "./change";



// ChangeList
/** 
 * A list of changes for a user.
**/
export class ChangeList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changes", elemType: Change })
  changes?: Change[];

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=newStartPageToken" })
  newStartPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
