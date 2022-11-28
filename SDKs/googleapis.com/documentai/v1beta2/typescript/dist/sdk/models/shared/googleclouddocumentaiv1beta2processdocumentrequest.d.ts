import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2AutoMlParams } from "./googleclouddocumentaiv1beta2automlparams";
import { GoogleCloudDocumentaiV1beta2EntityExtractionParams } from "./googleclouddocumentaiv1beta2entityextractionparams";
import { GoogleCloudDocumentaiV1beta2FormExtractionParams } from "./googleclouddocumentaiv1beta2formextractionparams";
import { GoogleCloudDocumentaiV1beta2InputConfig } from "./googleclouddocumentaiv1beta2inputconfig";
import { GoogleCloudDocumentaiV1beta2OcrParams } from "./googleclouddocumentaiv1beta2ocrparams";
import { GoogleCloudDocumentaiV1beta2OutputConfig } from "./googleclouddocumentaiv1beta2outputconfig";
import { GoogleCloudDocumentaiV1beta2TableExtractionParams } from "./googleclouddocumentaiv1beta2tableextractionparams";
/**
 * Request to process one document.
**/
export declare class GoogleCloudDocumentaiV1beta2ProcessDocumentRequest extends SpeakeasyBase {
    automlParams?: GoogleCloudDocumentaiV1beta2AutoMlParams;
    documentType?: string;
    entityExtractionParams?: GoogleCloudDocumentaiV1beta2EntityExtractionParams;
    formExtractionParams?: GoogleCloudDocumentaiV1beta2FormExtractionParams;
    inputConfig?: GoogleCloudDocumentaiV1beta2InputConfig;
    ocrParams?: GoogleCloudDocumentaiV1beta2OcrParams;
    outputConfig?: GoogleCloudDocumentaiV1beta2OutputConfig;
    parent?: string;
    tableExtractionParams?: GoogleCloudDocumentaiV1beta2TableExtractionParams;
}
