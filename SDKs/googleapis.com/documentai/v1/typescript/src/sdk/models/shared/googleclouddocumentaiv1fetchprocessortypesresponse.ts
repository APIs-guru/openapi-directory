import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1ProcessorType } from "./googleclouddocumentaiv1processortype";


// GoogleCloudDocumentaiV1FetchProcessorTypesResponse
/** 
 * Response message for fetch processor types.
**/
export class GoogleCloudDocumentaiV1FetchProcessorTypesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=processorTypes", elemType: shared.GoogleCloudDocumentaiV1ProcessorType })
  processorTypes?: GoogleCloudDocumentaiV1ProcessorType[];
}
