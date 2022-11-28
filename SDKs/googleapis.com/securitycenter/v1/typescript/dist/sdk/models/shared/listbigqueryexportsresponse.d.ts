import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudSecuritycenterV1BigQueryExport } from "./googlecloudsecuritycenterv1bigqueryexport";
/**
 * Response message for listing BigQuery exports.
**/
export declare class ListBigQueryExportsResponse extends SpeakeasyBase {
    bigQueryExports?: GoogleCloudSecuritycenterV1BigQueryExport[];
    nextPageToken?: string;
}
