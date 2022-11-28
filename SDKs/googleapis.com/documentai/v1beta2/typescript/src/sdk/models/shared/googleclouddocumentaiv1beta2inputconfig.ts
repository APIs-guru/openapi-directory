import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2GcsSource } from "./googleclouddocumentaiv1beta2gcssource";



// GoogleCloudDocumentaiV1beta2InputConfig
/** 
 * The desired input location and metadata.
**/
export class GoogleCloudDocumentaiV1beta2InputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contents" })
  contents?: string;

  @SpeakeasyMetadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudDocumentaiV1beta2GcsSource;

  @SpeakeasyMetadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
