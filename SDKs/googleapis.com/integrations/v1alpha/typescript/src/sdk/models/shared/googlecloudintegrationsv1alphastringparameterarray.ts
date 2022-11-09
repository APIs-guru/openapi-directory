import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleCloudIntegrationsV1alphaStringParameterArray
/** 
 * This message only contains a field of string array.
**/
export class GoogleCloudIntegrationsV1alphaStringParameterArray extends SpeakeasyBase {
  @Metadata({ data: "json, name=stringValues" })
  stringValues?: string[];
}
