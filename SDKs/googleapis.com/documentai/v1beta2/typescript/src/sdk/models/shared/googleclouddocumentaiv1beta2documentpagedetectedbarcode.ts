import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1beta2Barcode } from "./googleclouddocumentaiv1beta2barcode";
import { GoogleCloudDocumentaiV1beta2DocumentPageLayout } from "./googleclouddocumentaiv1beta2documentpagelayout";


// GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode
/** 
 * A detected barcode.
**/
export class GoogleCloudDocumentaiV1beta2DocumentPageDetectedBarcode extends SpeakeasyBase {
  @Metadata({ data: "json, name=barcode" })
  barcode?: GoogleCloudDocumentaiV1beta2Barcode;

  @Metadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1beta2DocumentPageLayout;
}
