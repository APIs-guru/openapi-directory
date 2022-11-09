import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A set of Shielded Instance options. Check [Images using supported Shielded VM features] Not all combinations are valid.
**/
export declare class ShieldedInstanceConfig extends SpeakeasyBase {
    enableIntegrityMonitoring?: boolean;
    enableSecureBoot?: boolean;
    enableVtpm?: boolean;
}
