import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// VulnerableParameters
/** 
 * Information about vulnerable request parameters.
**/
export class VulnerableParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=parameterNames" })
  parameterNames?: string[];
}
