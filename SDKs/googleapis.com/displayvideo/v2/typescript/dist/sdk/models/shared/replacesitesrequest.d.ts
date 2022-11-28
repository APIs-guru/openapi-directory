import { SpeakeasyBase } from "../../../internal/utils";
import { SiteInput } from "./site";
/**
 * Request message for SiteService.ReplaceSites.
**/
export declare class ReplaceSitesRequestInput extends SpeakeasyBase {
    advertiserId?: string;
    newSites?: SiteInput[];
    partnerId?: string;
}
