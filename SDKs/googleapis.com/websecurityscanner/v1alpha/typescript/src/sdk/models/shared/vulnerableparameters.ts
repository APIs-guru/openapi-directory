import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// VulnerableParameters
/** 
 * Information about vulnerable request parameters.
**/
export class VulnerableParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parameterNames" })
  parameterNames?: string[];
}
