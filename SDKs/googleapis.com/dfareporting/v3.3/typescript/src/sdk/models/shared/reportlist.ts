import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Report } from "./report";


// ReportList
/** 
 * Represents the list of reports.
**/
export class ReportList extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=items", elemType: shared.Report })
  items?: Report[];

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
