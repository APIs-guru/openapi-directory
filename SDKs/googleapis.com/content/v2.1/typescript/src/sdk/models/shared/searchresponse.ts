import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportRow } from "./reportrow";



// SearchResponse
/** 
 * Response message for the ReportService.Search method.
**/
export class SearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=results", elemType: ReportRow })
  results?: ReportRow[];
}
