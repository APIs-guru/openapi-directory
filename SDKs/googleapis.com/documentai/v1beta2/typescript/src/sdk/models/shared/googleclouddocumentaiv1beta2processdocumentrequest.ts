import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2AutoMlParams } from "./googleclouddocumentaiv1beta2automlparams";
import { GoogleCloudDocumentaiV1beta2EntityExtractionParams } from "./googleclouddocumentaiv1beta2entityextractionparams";
import { GoogleCloudDocumentaiV1beta2FormExtractionParams } from "./googleclouddocumentaiv1beta2formextractionparams";
import { GoogleCloudDocumentaiV1beta2InputConfig } from "./googleclouddocumentaiv1beta2inputconfig";
import { GoogleCloudDocumentaiV1beta2OcrParams } from "./googleclouddocumentaiv1beta2ocrparams";
import { GoogleCloudDocumentaiV1beta2OutputConfig } from "./googleclouddocumentaiv1beta2outputconfig";
import { GoogleCloudDocumentaiV1beta2TableExtractionParams } from "./googleclouddocumentaiv1beta2tableextractionparams";



// GoogleCloudDocumentaiV1beta2ProcessDocumentRequest
/** 
 * Request to process one document.
**/
export class GoogleCloudDocumentaiV1beta2ProcessDocumentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=automlParams" })
  automlParams?: GoogleCloudDocumentaiV1beta2AutoMlParams;

  @SpeakeasyMetadata({ data: "json, name=documentType" })
  documentType?: string;

  @SpeakeasyMetadata({ data: "json, name=entityExtractionParams" })
  entityExtractionParams?: GoogleCloudDocumentaiV1beta2EntityExtractionParams;

  @SpeakeasyMetadata({ data: "json, name=formExtractionParams" })
  formExtractionParams?: GoogleCloudDocumentaiV1beta2FormExtractionParams;

  @SpeakeasyMetadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudDocumentaiV1beta2InputConfig;

  @SpeakeasyMetadata({ data: "json, name=ocrParams" })
  ocrParams?: GoogleCloudDocumentaiV1beta2OcrParams;

  @SpeakeasyMetadata({ data: "json, name=outputConfig" })
  outputConfig?: GoogleCloudDocumentaiV1beta2OutputConfig;

  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=tableExtractionParams" })
  tableExtractionParams?: GoogleCloudDocumentaiV1beta2TableExtractionParams;
}
