import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3DocumentOutputConfig } from "./googleclouddocumentaiv1beta3documentoutputconfig";
import { GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig } from "./googleclouddocumentaiv1beta3batchprocessrequestbatchinputconfig";
import { GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig } from "./googleclouddocumentaiv1beta3batchdocumentsinputconfig";
import { GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig } from "./googleclouddocumentaiv1beta3batchprocessrequestbatchoutputconfig";



// GoogleCloudDocumentaiV1beta3BatchProcessRequest
/** 
 * Request message for batch process document method.
**/
export class GoogleCloudDocumentaiV1beta3BatchProcessRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=documentOutputConfig" })
  documentOutputConfig?: GoogleCloudDocumentaiV1beta3DocumentOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=inputConfigs", elemType: GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig })
  inputConfigs?: GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchInputConfig[];

  @SpeakeasyMetadata({ data: "json, name=inputDocuments" })
  inputDocuments?: GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig;

  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: GoogleCloudDocumentaiV1beta3BatchProcessRequestBatchOutputConfig;

  @SpeakeasyMetadata({ data: "json, name=skipHumanReview" })
  skipHumanReview?: boolean;
}
