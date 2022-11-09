import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDataplexV1StorageFormatCsvOptions
/** 
 * Describes CSV and similar semi-structured data formats.
**/
export class GoogleCloudDataplexV1StorageFormatCsvOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=delimiter" })
  delimiter?: string;

  @Metadata({ data: "json, name=encoding" })
  encoding?: string;

  @Metadata({ data: "json, name=headerRows" })
  headerRows?: number;

  @Metadata({ data: "json, name=quote" })
  quote?: string;
}
