import { SpeakeasyBase } from "../../../internal/utils";
import { Package } from "./package";
/**
 * A guest policy package including its source.
**/
export declare class EffectiveGuestPolicySourcedPackage extends SpeakeasyBase {
    package?: Package;
    source?: string;
}
