import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudHealthcareV1ConsentGcsDestination } from "./googlecloudhealthcarev1consentgcsdestination";



// QueryAccessibleDataRequest
/** 
 * Queries all data_ids that are consented for a given use in the given consent store and writes them to a specified destination. The returned Operation includes a progress counter for the number of User data mappings processed. Errors are logged to Cloud Logging (see [Viewing error logs in Cloud Logging] (https://cloud.google.com/healthcare/docs/how-tos/logging) and [QueryAccessibleData] for a sample log entry).
**/
export class QueryAccessibleDataRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GoogleCloudHealthcareV1ConsentGcsDestination;

  @SpeakeasyMetadata({ data: "json, name=requestAttributes" })
  requestAttributes?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=resourceAttributes" })
  resourceAttributes?: Map<string, string>;
}
