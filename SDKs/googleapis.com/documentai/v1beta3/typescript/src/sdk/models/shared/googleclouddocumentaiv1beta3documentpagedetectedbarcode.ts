import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1beta3Barcode } from "./googleclouddocumentaiv1beta3barcode";
import { GoogleCloudDocumentaiV1beta3DocumentPageLayout } from "./googleclouddocumentaiv1beta3documentpagelayout";


// GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode
/** 
 * A detected barcode.
**/
export class GoogleCloudDocumentaiV1beta3DocumentPageDetectedBarcode extends SpeakeasyBase {
  @Metadata({ data: "json, name=barcode" })
  barcode?: GoogleCloudDocumentaiV1beta3Barcode;

  @Metadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1beta3DocumentPageLayout;
}
