import { SpeakeasyBase } from "../../../internal/utils";
import { DeepLink } from "./deeplink";
/**
 * Contains information about where a user's browser is taken after the user clicks an ad.
**/
export declare class LandingPage extends SpeakeasyBase {
    advertiserId?: string;
    archived?: boolean;
    deepLinks?: DeepLink[];
    id?: string;
    kind?: string;
    name?: string;
    url?: string;
}
