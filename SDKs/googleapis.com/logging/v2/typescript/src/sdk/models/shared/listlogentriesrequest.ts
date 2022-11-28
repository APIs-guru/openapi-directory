import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListLogEntriesRequest
/** 
 * The parameters to ListLogEntries.
**/
export class ListLogEntriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=orderBy" })
  orderBy?: string;

  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=projectIds" })
  projectIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=resourceNames" })
  resourceNames?: string[];
}
