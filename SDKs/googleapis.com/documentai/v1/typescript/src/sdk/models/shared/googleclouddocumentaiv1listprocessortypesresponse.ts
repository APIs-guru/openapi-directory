import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1ProcessorType } from "./googleclouddocumentaiv1processortype";



// GoogleCloudDocumentaiV1ListProcessorTypesResponse
/** 
 * Response message for list processor types.
**/
export class GoogleCloudDocumentaiV1ListProcessorTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=processorTypes", elemType: GoogleCloudDocumentaiV1ProcessorType })
  processorTypes?: GoogleCloudDocumentaiV1ProcessorType[];
}
