import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Response for checking if a notebook instance is upgradeable.
**/
export declare class IsInstanceUpgradeableResponse extends SpeakeasyBase {
    upgradeImage?: string;
    upgradeInfo?: string;
    upgradeVersion?: string;
    upgradeable?: boolean;
}
