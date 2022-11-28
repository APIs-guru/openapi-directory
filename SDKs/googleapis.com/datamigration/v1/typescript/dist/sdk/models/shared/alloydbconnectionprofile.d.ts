import { SpeakeasyBase } from "../../../internal/utils";
import { AlloyDbSettings } from "./alloydbsettings";
import { AlloyDbSettingsInput } from "./alloydbsettings";
/**
 * Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
**/
export declare class AlloyDbConnectionProfile extends SpeakeasyBase {
    clusterId?: string;
    settings?: AlloyDbSettings;
}
/**
 * Specifies required connection parameters, and the parameters required to create an AlloyDB destination cluster.
**/
export declare class AlloyDbConnectionProfileInput extends SpeakeasyBase {
    clusterId?: string;
    settings?: AlloyDbSettingsInput;
}
