import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// SearchRequest
/** 
 * Request message for the ReportService.Search method.
**/
export class SearchRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @Metadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @Metadata({ data: "json, name=query" })
  query?: string;
}
