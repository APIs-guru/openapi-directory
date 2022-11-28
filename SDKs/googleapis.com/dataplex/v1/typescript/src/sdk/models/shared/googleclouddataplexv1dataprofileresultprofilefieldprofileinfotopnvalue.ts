import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue
/** 
 * The TopNValue defines the structure of output of top N values of a field.
**/
export class GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfoTopNValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
