import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDocumentaiV1Barcode } from "./googleclouddocumentaiv1barcode";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";



// GoogleCloudDocumentaiV1DocumentPageDetectedBarcode
/** 
 * A detected barcode.
**/
export class GoogleCloudDocumentaiV1DocumentPageDetectedBarcode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=barcode" })
  barcode?: GoogleCloudDocumentaiV1Barcode;

  @SpeakeasyMetadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1DocumentPageLayout;
}
