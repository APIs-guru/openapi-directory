import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Change } from "./change";
import { ResponseHeader } from "./responseheader";



// ChangesListResponse
/** 
 * The response to a request to enumerate Changes to a ResourceRecordSets collection.
**/
export class ChangesListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changes", elemType: Change })
  changes?: Change[];

  @SpeakeasyMetadata({ data: "json, name=header" })
  header?: ResponseHeader;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
