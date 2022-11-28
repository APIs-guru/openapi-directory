import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Header } from "./header";
import { I18nConfig } from "./i18nconfig";
import { Redirect } from "./redirect";
import { Rewrite } from "./rewrite";


export enum ServingConfigAppAssociationEnum {
    Auto = "AUTO",
    None = "NONE"
}

export enum ServingConfigTrailingSlashBehaviorEnum {
    TrailingSlashBehaviorUnspecified = "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED",
    Add = "ADD",
    Remove = "REMOVE"
}


// ServingConfig
/** 
 * The configuration for how incoming requests to a site should be routed and processed before serving content. The URL request paths are matched against the specified URL patterns in the configuration, then Hosting applies the applicable configuration according to a specific [priority order](https://firebase.google.com/docs/hosting/full-config#hosting_priority_order).
**/
export class ServingConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appAssociation" })
  appAssociation?: ServingConfigAppAssociationEnum;

  @SpeakeasyMetadata({ data: "json, name=cleanUrls" })
  cleanUrls?: boolean;

  @SpeakeasyMetadata({ data: "json, name=headers", elemType: Header })
  headers?: Header[];

  @SpeakeasyMetadata({ data: "json, name=i18n" })
  i18n?: I18nConfig;

  @SpeakeasyMetadata({ data: "json, name=redirects", elemType: Redirect })
  redirects?: Redirect[];

  @SpeakeasyMetadata({ data: "json, name=rewrites", elemType: Rewrite })
  rewrites?: Rewrite[];

  @SpeakeasyMetadata({ data: "json, name=trailingSlashBehavior" })
  trailingSlashBehavior?: ServingConfigTrailingSlashBehaviorEnum;
}
