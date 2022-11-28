import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3ProcessorType } from "./googleclouddocumentaiv1beta3processortype";



// GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse
/** 
 * Response message for list processor types.
**/
export class GoogleCloudDocumentaiV1beta3ListProcessorTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=processorTypes", elemType: GoogleCloudDocumentaiV1beta3ProcessorType })
  processorTypes?: GoogleCloudDocumentaiV1beta3ProcessorType[];
}
