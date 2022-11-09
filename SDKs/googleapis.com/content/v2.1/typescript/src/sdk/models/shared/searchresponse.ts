import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReportRow } from "./reportrow";


// SearchResponse
/** 
 * Response message for the ReportService.Search method.
**/
export class SearchResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=results", elemType: shared.ReportRow })
  results?: ReportRow[];
}
