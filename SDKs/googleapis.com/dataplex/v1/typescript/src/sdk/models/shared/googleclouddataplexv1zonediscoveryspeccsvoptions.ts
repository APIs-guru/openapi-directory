import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions
/** 
 * Describe CSV and similar semi-structured data formats.
**/
export class GoogleCloudDataplexV1ZoneDiscoverySpecCsvOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delimiter" })
  delimiter?: string;

  @SpeakeasyMetadata({ data: "json, name=disableTypeInference" })
  disableTypeInference?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encoding" })
  encoding?: string;

  @SpeakeasyMetadata({ data: "json, name=headerRows" })
  headerRows?: number;
}
