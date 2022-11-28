import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// SearchRequest
/** 
 * Request message for the ReportService.Search method.
**/
export class SearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=pageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=pageToken" })
  pageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=query" })
  query?: string;
}
