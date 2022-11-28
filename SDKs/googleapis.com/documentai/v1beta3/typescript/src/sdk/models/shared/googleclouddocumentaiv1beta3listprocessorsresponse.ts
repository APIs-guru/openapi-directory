import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3Processor } from "./googleclouddocumentaiv1beta3processor";



// GoogleCloudDocumentaiV1beta3ListProcessorsResponse
/** 
 * Response message for list processors.
**/
export class GoogleCloudDocumentaiV1beta3ListProcessorsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=processors", elemType: GoogleCloudDocumentaiV1beta3Processor })
  processors?: GoogleCloudDocumentaiV1beta3Processor[];
}
