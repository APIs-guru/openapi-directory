import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions
/** 
 * Describe CSV and similar semi-structured data formats.
**/
export class GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=delimiter" })
  delimiter?: string;

  @Metadata({ data: "json, name=disableTypeInference" })
  disableTypeInference?: boolean;

  @Metadata({ data: "json, name=encoding" })
  encoding?: string;

  @Metadata({ data: "json, name=headerRows" })
  headerRows?: number;
}
