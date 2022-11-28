import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDocumentaiV1Barcode
/** 
 * Encodes the detailed information of a barcode.
**/
export class GoogleCloudDocumentaiV1Barcode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: string;

  @SpeakeasyMetadata({ data: "json, name=rawValue" })
  rawValue?: string;

  @SpeakeasyMetadata({ data: "json, name=valueFormat" })
  valueFormat?: string;
}
