import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StateFamilyConfig
/** 
 * State family configuration.
**/
export class StateFamilyConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isRead" })
  isRead?: boolean;

  @SpeakeasyMetadata({ data: "json, name=stateFamily" })
  stateFamily?: string;
}
