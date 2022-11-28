import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WmxSitePermissionLevelEnum {
    SitePermissionLevelUnspecified = "SITE_PERMISSION_LEVEL_UNSPECIFIED",
    SiteOwner = "SITE_OWNER",
    SiteFullUser = "SITE_FULL_USER",
    SiteRestrictedUser = "SITE_RESTRICTED_USER",
    SiteUnverifiedUser = "SITE_UNVERIFIED_USER"
}


// WmxSite
/** 
 * Contains permission level information about a Search Console site. For more information, see [Permissions in Search Console](https://support.google.com/webmasters/answer/2451999).
**/
export class WmxSite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=permissionLevel" })
  permissionLevel?: WmxSitePermissionLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=siteUrl" })
  siteUrl?: string;
}
