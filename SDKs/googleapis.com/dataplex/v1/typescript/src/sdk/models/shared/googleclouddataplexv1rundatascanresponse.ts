import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataScanJob } from "./googleclouddataplexv1datascanjob";



// GoogleCloudDataplexV1RunDataScanResponse
/** 
 * Run DataScan Response.
**/
export class GoogleCloudDataplexV1RunDataScanResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=job" })
  job?: GoogleCloudDataplexV1DataScanJob;
}
