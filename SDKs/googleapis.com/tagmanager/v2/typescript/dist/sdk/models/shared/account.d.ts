import { SpeakeasyBase } from "../../../internal/utils";
import { AccountFeatures } from "./accountfeatures";
/**
 * Represents a Google Tag Manager Account.
**/
export declare class Account extends SpeakeasyBase {
    accountId?: string;
    features?: AccountFeatures;
    fingerprint?: string;
    name?: string;
    path?: string;
    shareData?: boolean;
    tagManagerUrl?: string;
}
