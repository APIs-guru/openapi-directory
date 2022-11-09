import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaDoubleParameterArray
/** 
 * This message only contains a field of double number array.
**/
export class GoogleCloudIntegrationsV1alphaDoubleParameterArray extends SpeakeasyBase {
  @Metadata({ data: "json, name=doubleValues" })
  doubleValues?: number[];
}
