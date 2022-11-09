import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDocumentaiV1beta3Barcode
/** 
 * Encodes the detailed information of a barcode.
**/
export class GoogleCloudDocumentaiV1beta3Barcode extends SpeakeasyBase {
  @Metadata({ data: "json, name=format" })
  format?: string;

  @Metadata({ data: "json, name=rawValue" })
  rawValue?: string;

  @Metadata({ data: "json, name=valueFormat" })
  valueFormat?: string;
}
