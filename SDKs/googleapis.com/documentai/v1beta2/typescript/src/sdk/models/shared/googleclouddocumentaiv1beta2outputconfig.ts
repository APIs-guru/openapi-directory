import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1beta2GcsDestination } from "./googleclouddocumentaiv1beta2gcsdestination";


// GoogleCloudDocumentaiV1beta2OutputConfig
/** 
 * The desired output location and metadata.
**/
export class GoogleCloudDocumentaiV1beta2OutputConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GoogleCloudDocumentaiV1beta2GcsDestination;

  @Metadata({ data: "json, name=pagesPerShard" })
  pagesPerShard?: number;
}
