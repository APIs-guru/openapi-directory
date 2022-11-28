import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig } from "./googleclouddocumentaiv1beta3batchdocumentsinputconfig";



// GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData
/** 
 * The input data used to train a new `ProcessorVersion`.
**/
export class GoogleCloudDocumentaiV1beta3TrainProcessorVersionRequestInputData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=testDocuments" })
  testDocuments?: GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig;

  @SpeakeasyMetadata({ data: "json, name=trainingDocuments" })
  trainingDocuments?: GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig;
}
