import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3ProcessorType } from "./googleclouddocumentaiv1beta3processortype";



// GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse
/** 
 * Response message for fetch processor types.
**/
export class GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=processorTypes", elemType: GoogleCloudDocumentaiV1beta3ProcessorType })
  processorTypes?: GoogleCloudDocumentaiV1beta3ProcessorType[];
}
