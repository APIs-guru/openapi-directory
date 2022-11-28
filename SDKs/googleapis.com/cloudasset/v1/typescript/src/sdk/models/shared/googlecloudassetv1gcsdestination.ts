import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudAssetV1GcsDestination
/** 
 * A Cloud Storage location.
**/
export class GoogleCloudAssetV1GcsDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}
