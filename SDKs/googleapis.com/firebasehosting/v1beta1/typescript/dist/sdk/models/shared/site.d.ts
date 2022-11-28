import { SpeakeasyBase } from "../../../internal/utils";
export declare enum SiteTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    DefaultSite = "DEFAULT_SITE",
    UserSite = "USER_SITE"
}
/**
 * A `Site` represents a Firebase Hosting site.
**/
export declare class SiteInput extends SpeakeasyBase {
    appId?: string;
    labels?: Map<string, string>;
}
/**
 * A `Site` represents a Firebase Hosting site.
**/
export declare class Site extends SpeakeasyBase {
    appId?: string;
    defaultUrl?: string;
    labels?: Map<string, string>;
    name?: string;
    type?: SiteTypeEnum;
}
