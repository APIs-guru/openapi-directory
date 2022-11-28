import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1beta3Barcode
/** 
 * Encodes the detailed information of a barcode.
**/
export class GoogleCloudDocumentaiV1beta3Barcode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=rawValue" })
  rawValue?: string;

  @SpeakeasyMetadata({ data: "json, name=valueFormat" })
  valueFormat?: string;
}
