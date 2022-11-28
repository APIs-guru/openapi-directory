import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1Processor } from "./googleclouddocumentaiv1processor";



// GoogleCloudDocumentaiV1ListProcessorsResponse
/** 
 * Response message for list processors.
**/
export class GoogleCloudDocumentaiV1ListProcessorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=processors", elemType: GoogleCloudDocumentaiV1Processor })
  processors?: GoogleCloudDocumentaiV1Processor[];
}
