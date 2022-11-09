import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta3ProcessorVersion } from "./googleclouddocumentaiv1beta3processorversion";


// GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse
/** 
 * Response message for list processors.
**/
export class GoogleCloudDocumentaiV1beta3ListProcessorVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=processorVersions", elemType: shared.GoogleCloudDocumentaiV1beta3ProcessorVersion })
  processorVersions?: GoogleCloudDocumentaiV1beta3ProcessorVersion[];
}
