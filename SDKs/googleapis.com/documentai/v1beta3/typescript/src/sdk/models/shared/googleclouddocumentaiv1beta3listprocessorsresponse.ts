import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta3Processor } from "./googleclouddocumentaiv1beta3processor";


// GoogleCloudDocumentaiV1beta3ListProcessorsResponse
/** 
 * Response message for list processors.
**/
export class GoogleCloudDocumentaiV1beta3ListProcessorsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=processors", elemType: shared.GoogleCloudDocumentaiV1beta3Processor })
  processors?: GoogleCloudDocumentaiV1beta3Processor[];
}
