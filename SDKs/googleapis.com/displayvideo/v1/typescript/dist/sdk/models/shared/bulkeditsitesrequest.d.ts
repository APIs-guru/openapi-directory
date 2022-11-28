import { SpeakeasyBase } from "../../../internal/utils";
import { SiteInput } from "./site";
/**
 * Request message for SiteService.BulkEditSites.
**/
export declare class BulkEditSitesRequestInput extends SpeakeasyBase {
    advertiserId?: string;
    createdSites?: SiteInput[];
    deletedSites?: string[];
    partnerId?: string;
}
