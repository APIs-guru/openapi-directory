import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Report } from "./report";


// ListReportsResponse
/** 
 * List reports response.
**/
export class ListReportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=reports", elemType: shared.Report })
  reports?: Report[];
}
