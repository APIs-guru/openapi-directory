import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudIntegrationsV1alphaStringParameterArray
/** 
 * This message only contains a field of string array.
**/
export class GoogleCloudIntegrationsV1alphaStringParameterArray extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stringValues" })
  stringValues?: string[];
}
