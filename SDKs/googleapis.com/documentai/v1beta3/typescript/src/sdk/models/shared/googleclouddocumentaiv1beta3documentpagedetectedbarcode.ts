import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta3Barcode } from "./googleclouddocumentaiv1beta3barcode";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";



// GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode
/** 
 * A detected barcode.
**/
export class GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=barcode" })
  barcode?: GoogleCloudDocumentaiV1beta3Barcode;

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;
}
