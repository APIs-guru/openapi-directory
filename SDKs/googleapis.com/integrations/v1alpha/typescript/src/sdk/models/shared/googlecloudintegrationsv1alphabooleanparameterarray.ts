import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaBooleanParameterArray
/** 
 * This message only contains a field of boolean array.
**/
export class GoogleCloudIntegrationsV1alphaBooleanParameterArray extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=booleanValues" })
  booleanValues?: boolean[];
}
