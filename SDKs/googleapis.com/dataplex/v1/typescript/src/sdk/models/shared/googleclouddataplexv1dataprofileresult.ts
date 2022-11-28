import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataProfileResultProfile } from "./googleclouddataplexv1dataprofileresultprofile";
import { GoogleCloudDataplexV1ScannedData } from "./googleclouddataplexv1scanneddata";



// GoogleCloudDataplexV1DataProfileResult
/** 
 * DataProfileResult defines the output of DataProfileScan. Each field of the table will have field type specific profile result.
**/
export class GoogleCloudDataplexV1DataProfileResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=profile" })
  profile?: GoogleCloudDataplexV1DataProfileResultProfile;

  @SpeakeasyMetadata({ data: "json, name=rowCount" })
  rowCount?: string;

  @SpeakeasyMetadata({ data: "json, name=scannedData" })
  scannedData?: GoogleCloudDataplexV1ScannedData;
}
