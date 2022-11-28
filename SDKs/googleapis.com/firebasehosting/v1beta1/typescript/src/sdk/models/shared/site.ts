import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SiteTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    DefaultSite = "DEFAULT_SITE",
    UserSite = "USER_SITE"
}


// SiteInput
/** 
 * A `Site` represents a Firebase Hosting site.
**/
export class SiteInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;
}


// Site
/** 
 * A `Site` represents a Firebase Hosting site.
**/
export class Site extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appId" })
  appId?: string;

  @SpeakeasyMetadata({ data: "json, name=defaultUrl" })
  defaultUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SiteTypeEnum;
}
