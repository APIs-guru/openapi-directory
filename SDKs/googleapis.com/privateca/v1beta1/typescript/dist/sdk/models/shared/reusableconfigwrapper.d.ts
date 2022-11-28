import { SpeakeasyBase } from "../../../internal/utils";
import { ReusableConfigValues } from "./reusableconfigvalues";
/**
 * A ReusableConfigWrapper describes values that may assist in creating an X.509 certificate, or a reference to a pre-defined set of values.
**/
export declare class ReusableConfigWrapper extends SpeakeasyBase {
    reusableConfig?: string;
    reusableConfigValues?: ReusableConfigValues;
}
