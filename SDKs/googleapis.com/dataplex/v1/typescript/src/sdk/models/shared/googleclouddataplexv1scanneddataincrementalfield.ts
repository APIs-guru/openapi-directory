import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1ScannedDataIncrementalField
/** 
 * A data range denoted by a pair of start/end values of a field.
**/
export class GoogleCloudDataplexV1ScannedDataIncrementalField extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: string;

  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=start" })
  start?: string;
}
