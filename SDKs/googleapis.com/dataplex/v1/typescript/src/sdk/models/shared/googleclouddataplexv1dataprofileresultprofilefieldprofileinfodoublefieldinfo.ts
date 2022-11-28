import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo
/** 
 * DoubleFieldInfo defines output for any double type field.
**/
export class GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoDoubleFieldInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=average" })
  average?: number;

  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: number;

  @SpeakeasyMetadata({ data: "json, name=quartiles" })
  quartiles?: number[];

  @SpeakeasyMetadata({ data: "json, name=standardDeviation" })
  standardDeviation?: number;
}
