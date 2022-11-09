import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudSecuritycenterV1BigQueryExport } from "./googlecloudsecuritycenterv1bigqueryexport";


// ListBigQueryExportsResponse
/** 
 * Response message for listing BigQuery exports.
**/
export class ListBigQueryExportsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=bigQueryExports", elemType: shared.GoogleCloudSecuritycenterV1BigQueryExport })
  bigQueryExports?: GoogleCloudSecuritycenterV1BigQueryExport[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
