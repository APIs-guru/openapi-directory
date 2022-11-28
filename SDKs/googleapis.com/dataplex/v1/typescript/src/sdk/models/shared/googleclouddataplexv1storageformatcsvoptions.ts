import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1StorageFormatCsvOptions
/** 
 * Describes CSV and similar semi-structured data formats.
**/
export class GoogleCloudDataplexV1StorageFormatCsvOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delimiter" })
  delimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=encoding" })
  encoding?: string;

  @SpeakeasyMetadata({ data: "json, name=headerRows" })
  headerRows?: number;

  @SpeakeasyMetadata({ data: "json, name=quote" })
  quote?: string;
}
