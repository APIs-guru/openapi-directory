import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
import { SiteContact } from "./sitecontact";
import { SiteSettings } from "./sitesettings";
import { SiteVideoSettings } from "./sitevideosettings";
/**
 * Contains properties of a site.
**/
export declare class Site extends SpeakeasyBase {
    accountId?: string;
    approved?: boolean;
    directorySiteId?: string;
    directorySiteIdDimensionValue?: DimensionValue;
    id?: string;
    idDimensionValue?: DimensionValue;
    keyName?: string;
    kind?: string;
    name?: string;
    siteContacts?: SiteContact[];
    siteSettings?: SiteSettings;
    subaccountId?: string;
    videoSettings?: SiteVideoSettings;
}
