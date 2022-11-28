import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1ProcessorType } from "./googleclouddocumentaiv1processortype";



// GoogleCloudDocumentaiV1FetchProcessorTypesResponse
/** 
 * Response message for fetch processor types.
**/
export class GoogleCloudDocumentaiV1FetchProcessorTypesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=processorTypes", elemType: GoogleCloudDocumentaiV1ProcessorType })
  processorTypes?: GoogleCloudDocumentaiV1ProcessorType[];
}
