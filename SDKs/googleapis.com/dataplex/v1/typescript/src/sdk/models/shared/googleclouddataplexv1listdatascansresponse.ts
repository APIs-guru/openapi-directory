import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataScan } from "./googleclouddataplexv1datascan";



// GoogleCloudDataplexV1ListDataScansResponse
/** 
 * List dataScans response.
**/
export class GoogleCloudDataplexV1ListDataScansResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataScans", elemType: GoogleCloudDataplexV1DataScan })
  dataScans?: GoogleCloudDataplexV1DataScan[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
