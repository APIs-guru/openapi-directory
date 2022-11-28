import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1GcsSource } from "./googlecloudvisionv1p1beta1gcssource";



// GoogleCloudVisionV1p1beta1InputConfig
/** 
 * The desired input location and metadata.
**/
export class GoogleCloudVisionV1p1beta1InputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudVisionV1p1beta1GcsSource;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
