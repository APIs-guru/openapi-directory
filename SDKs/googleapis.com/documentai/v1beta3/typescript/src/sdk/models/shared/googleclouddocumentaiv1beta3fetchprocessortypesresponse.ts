import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1beta3ProcessorType } from "./googleclouddocumentaiv1beta3processortype";


// GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse
/** 
 * Response message for fetch processor types.
**/
export class GoogleCloudDocumentaiV1beta3FetchProcessorTypesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=processorTypes", elemType: shared.GoogleCloudDocumentaiV1beta3ProcessorType })
  processorTypes?: GoogleCloudDocumentaiV1beta3ProcessorType[];
}
