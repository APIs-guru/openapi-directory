import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudVisionV1p2beta1GcsSource } from "./googlecloudvisionv1p2beta1gcssource";


// GoogleCloudVisionV1p2beta1InputConfig
/** 
 * The desired input location and metadata.
**/
export class GoogleCloudVisionV1p2beta1InputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=content" })
  content?: string;

  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudVisionV1p2beta1GcsSource;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
