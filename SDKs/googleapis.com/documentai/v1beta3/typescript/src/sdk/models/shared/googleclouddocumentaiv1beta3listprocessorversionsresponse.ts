import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3ProcessorVersion } from "./googleclouddocumentaiv1beta3processorversion";



// GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse
/** 
 * Response message for list processors.
**/
export class GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=processorVersions", elemType: GoogleCloudDocumentaiV1beta3ProcessorVersion })
  processorVersions?: GoogleCloudDocumentaiV1beta3ProcessorVersion[];
}
