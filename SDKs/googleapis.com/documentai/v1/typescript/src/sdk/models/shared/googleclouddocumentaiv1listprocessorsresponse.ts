import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1Processor } from "./googleclouddocumentaiv1processor";


// GoogleCloudDocumentaiV1ListProcessorsResponse
/** 
 * Response message for list processors.
**/
export class GoogleCloudDocumentaiV1ListProcessorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=processors", elemType: shared.GoogleCloudDocumentaiV1Processor })
  processors?: GoogleCloudDocumentaiV1Processor[];
}
