import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudAssetV1p7beta1GcsDestination
/** 
 * A Cloud Storage location.
**/
export class GoogleCloudAssetV1p7beta1GcsDestination extends SpeakeasyBase {
  @Metadata({ data: "json, name=uri" })
  uri?: string;

  @Metadata({ data: "json, name=uriPrefix" })
  uriPrefix?: string;
}
