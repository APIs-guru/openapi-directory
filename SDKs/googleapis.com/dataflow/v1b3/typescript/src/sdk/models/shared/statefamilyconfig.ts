import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StateFamilyConfig
/** 
 * State family configuration.
**/
export class StateFamilyConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=isRead" })
  isRead?: boolean;

  @Metadata({ data: "json, name=stateFamily" })
  stateFamily?: string;
}
