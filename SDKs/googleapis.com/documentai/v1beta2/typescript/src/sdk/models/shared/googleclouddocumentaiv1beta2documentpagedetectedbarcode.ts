import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1beta2Barcode } from "./googleclouddocumentaiv1beta2barcode";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";



// GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode
/** 
 * A detected barcode.
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=barcode" })
  barcode?: GoogleCloudDocumentaiV1beta2Barcode;

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;
}
