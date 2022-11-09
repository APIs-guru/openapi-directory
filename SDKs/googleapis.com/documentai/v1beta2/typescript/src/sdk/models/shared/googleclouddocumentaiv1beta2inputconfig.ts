import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1beta2GcsSource } from "./googleclouddocumentaiv1beta2gcssource";


// GoogleCloudDocumentaiV1beta2InputConfig
/** 
 * The desired input location and metadata.
**/
export class GoogleCloudDocumentaiV1beta2InputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=contents" })
  contents?: string;

  @Metadata({ data: "json, name=gcsSource" })
  gcsSource?: GoogleCloudDocumentaiV1beta2GcsSource;

  @Metadata({ data: "json, name=mimeType" })
  mimeType?: string;
}
