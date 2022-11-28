import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReusableConfigValues } from "./reusableconfigvalues";



// ReusableConfigWrapper
/** 
 * A ReusableConfigWrapper describes values that may assist in creating an X.509 certificate, or a reference to a pre-defined set of values.
**/
export class ReusableConfigWrapper extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reusableConfig" })
  reusableConfig?: string;

  @SpeakeasyMetadata({ data: "json, name=reusableConfigValues" })
  reusableConfigValues?: ReusableConfigValues;
}
