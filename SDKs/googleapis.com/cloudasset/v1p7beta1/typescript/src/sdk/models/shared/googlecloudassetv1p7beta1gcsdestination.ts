import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudAssetV1p7beta1GcsDestination
/** 
 * A Cloud Storage location.
**/
export class GoogleCloudAssetV1p7beta1GcsDestination extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;

  @SpeakeasyMetadata({ data: "json, name=uriPrefix" })
  uriPrefix?: string;
}
