import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Report } from "./report";



// ListReportsResponse
/** 
 * List reports response.
**/
export class ListReportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=reports", elemType: Report })
  reports?: Report[];
}
