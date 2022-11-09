import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1ProcessorVersion } from "./googleclouddocumentaiv1processorversion";


// GoogleCloudDocumentaiV1ListProcessorVersionsResponse
/** 
 * Response message for list processors.
**/
export class GoogleCloudDocumentaiV1ListProcessorVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=processorVersions", elemType: shared.GoogleCloudDocumentaiV1ProcessorVersion })
  processorVersions?: GoogleCloudDocumentaiV1ProcessorVersion[];
}
