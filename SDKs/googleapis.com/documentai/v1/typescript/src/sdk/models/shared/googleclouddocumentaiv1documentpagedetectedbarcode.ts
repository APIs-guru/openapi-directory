import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudDocumentaiV1Barcode } from "./googleclouddocumentaiv1barcode";
import { GoogleCloudDocumentaiV1DocumentPageLayout } from "./googleclouddocumentaiv1documentpagelayout";


// GoogleCloudDocumentaiV1DocumentPageDetectedBarcode
/** 
 * A detected barcode.
**/
export class GoogleCloudDocumentaiV1DocumentPageDetectedBarcode extends SpeakeasyBase {
  @Metadata({ data: "json, name=barcode" })
  barcode?: GoogleCloudDocumentaiV1Barcode;

  @Metadata({ data: "json, name=layout" })
  layout?: GoogleCloudDocumentaiV1DocumentPageLayout;
}
