import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo
/** 
 * IntegerFieldInfo defines output for any integer type field.
**/
export class GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoIntegerFieldInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average" })
  average?: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: string;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: string;

  @SpeakeasyMetadata({ data: "json, name=quartiles" })
  quartiles?: string[];

  @SpeakeasyMetadata({ data: "json, name=standardDeviation" })
  standardDeviation?: number;
}
