import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaDoubleParameterArray
/** 
 * This message only contains a field of double number array.
**/
export class GoogleCloudIntegrationsV1alphaDoubleParameterArray extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=doubleValues" })
  doubleValues?: number[];
}
