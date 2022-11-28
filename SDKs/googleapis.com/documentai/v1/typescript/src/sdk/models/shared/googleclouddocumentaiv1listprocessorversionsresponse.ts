import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1ProcessorVersion } from "./googleclouddocumentaiv1processorversion";



// GoogleCloudDocumentaiV1ListProcessorVersionsResponse
/** 
 * Response message for list processors.
**/
export class GoogleCloudDocumentaiV1ListProcessorVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=processorVersions", elemType: GoogleCloudDocumentaiV1ProcessorVersion })
  processorVersions?: GoogleCloudDocumentaiV1ProcessorVersion[];
}
