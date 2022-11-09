import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
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
  @Metadata({ data: "json, name=automlParams" })
  automlParams?: GoogleCloudDocumentaiV1beta2AutoMlParams;

  @Metadata({ data: "json, name=documentType" })
  documentType?: string;

  @Metadata({ data: "json, name=entityExtractionParams" })
  entityExtractionParams?: GoogleCloudDocumentaiV1beta2EntityExtractionParams;

  @Metadata({ data: "json, name=formExtractionParams" })
  formExtractionParams?: GoogleCloudDocumentaiV1beta2FormExtractionParams;

  @Metadata({ data: "json, name=inputConfig" })
  inputConfig?: GoogleCloudDocumentaiV1beta2InputConfig;

  @Metadata({ data: "json, name=ocrParams" })
  ocrParams?: GoogleCloudDocumentaiV1beta2OcrParams;

  @Metadata({ data: "json, name=outputConfig" })
  outputConfig?: GoogleCloudDocumentaiV1beta2OutputConfig;

  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=tableExtractionParams" })
  tableExtractionParams?: GoogleCloudDocumentaiV1beta2TableExtractionParams;
}
