import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentSchema } from "./googleclouddocumentaiv1beta3documentschema";
import { GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData } from "./googleclouddocumentaiv1beta3trainprocessorversionrequestinputdata";
import { GoogleCloudDocumentaiV1beta3ProcessorVersion } from "./googleclouddocumentaiv1beta3processorversion";



// GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest
/** 
 * Request message for the create processor version method.
**/
export class GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseProcessorVersion" })
  baseProcessorVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=documentSchema" })
  documentSchema?: GoogleCloudDocumentaiV1beta3DocumentSchema;

  @SpeakeasyMetadata({ data: "json, name=inputData" })
  inputData?: GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData;

  @SpeakeasyMetadata({ data: "json, name=processorVersion" })
  processorVersion?: GoogleCloudDocumentaiV1beta3ProcessorVersion;
}
