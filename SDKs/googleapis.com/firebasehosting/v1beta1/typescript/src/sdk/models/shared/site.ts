import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SiteTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED"
,    DefaultSite = "DEFAULT_SITE"
,    UserSite = "USER_SITE"
}


// Site
/** 
 * A `Site` represents a Firebase Hosting site.
**/
export class Site extends SpeakeasyBase {
  @Metadata({ data: "json, name=appId" })
  appId?: string;

  @Metadata({ data: "json, name=defaultUrl" })
  defaultUrl?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=type" })
  type?: SiteTypeEnum;
}
