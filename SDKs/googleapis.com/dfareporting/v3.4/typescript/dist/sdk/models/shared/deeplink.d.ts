import { SpeakeasyBase } from "../../../internal/utils";
import { MobileApp } from "./mobileapp";
/**
 * Contains information about a landing page deep link.
**/
export declare class DeepLink extends SpeakeasyBase {
    appUrl?: string;
    fallbackUrl?: string;
    kind?: string;
    mobileApp?: MobileApp;
    remarketingListIds?: string[];
}
