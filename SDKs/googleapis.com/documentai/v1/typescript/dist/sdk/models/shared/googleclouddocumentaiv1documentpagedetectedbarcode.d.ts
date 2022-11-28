import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1Barcode } from "./googleclouddocumentaiv1barcode";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";
/**
 * A detected barcode.
**/
export declare class GoogleCloudDocumentaiV1DocumentPageDetectedBarcode extends SpeakeasyBase {
    barcode?: GoogleCloudDocumentaiV1Barcode;
    layout?: GoogleCloudDocumentaiV1DocumentPageLayout;
}
