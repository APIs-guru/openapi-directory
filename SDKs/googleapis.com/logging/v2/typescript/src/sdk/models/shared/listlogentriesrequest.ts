import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListLogEntriesRequest
/** 
 * The parameters to ListLogEntries.
**/
export class ListLogEntriesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=orderBy" })
  orderBy?: string;

  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=projectIds" })
  projectIds?: string[];

  @Metadata({ data: "json, name=resourceNames" })
  resourceNames?: string[];
}
