import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudSecuritycenterV1BigQueryExport } from "./googlecloudsecuritycenterv1bigqueryexport";



// ListBigQueryExportsResponse
/** 
 * Response message for listing BigQuery exports.
**/
export class ListBigQueryExportsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=bigQueryExports", elemType: GoogleCloudSecuritycenterV1BigQueryExport })
  bigQueryExports?: GoogleCloudSecuritycenterV1BigQueryExport[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
