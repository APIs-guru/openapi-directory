import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudDocumentaiV1ProcessorType } from "./googleclouddocumentaiv1processortype";


// GoogleCloudDocumentaiV1ListProcessorTypesResponse
/** 
 * Response message for list processor types.
**/
export class GoogleCloudDocumentaiV1ListProcessorTypesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=processorTypes", elemType: shared.GoogleCloudDocumentaiV1ProcessorType })
  processorTypes?: GoogleCloudDocumentaiV1ProcessorType[];
}
