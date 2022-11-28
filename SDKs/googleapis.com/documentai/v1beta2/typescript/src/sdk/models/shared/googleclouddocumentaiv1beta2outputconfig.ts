import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2GcsDestination } from "./googleclouddocumentaiv1beta2gcsdestination";



// GoogleCloudDocumentaiV1beta2OutputConfig
/** 
 * The desired output location and metadata.
**/
export class GoogleCloudDocumentaiV1beta2OutputConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gcsDestination" })
  gcsDestination?: GoogleCloudDocumentaiV1beta2GcsDestination;

  @SpeakeasyMetadata({ data: "json, name=pagesPerShard" })
  pagesPerShard?: number;
}
