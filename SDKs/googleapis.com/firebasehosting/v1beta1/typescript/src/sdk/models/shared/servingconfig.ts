import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Header } from "./header";
import { I18nConfig } from "./i18nconfig";
import { Redirect } from "./redirect";
import { Rewrite } from "./rewrite";

export enum ServingConfigAppAssociationEnum {
    Auto = "AUTO"
,    None = "NONE"
}

export enum ServingConfigTrailingSlashBehaviorEnum {
    TrailingSlashBehaviorUnspecified = "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED"
,    Add = "ADD"
,    Remove = "REMOVE"
}


// ServingConfig
/** 
 * The configuration for how incoming requests to a site should be routed and processed before serving content. The URL request paths are matched against the specified URL patterns in the configuration, then Hosting applies the applicable configuration according to a specific [priority order](https://firebase.google.com/docs/hosting/full-config#hosting_priority_order).
**/
export class ServingConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=appAssociation" })
  appAssociation?: ServingConfigAppAssociationEnum;

  @Metadata({ data: "json, name=cleanUrls" })
  cleanUrls?: boolean;

  @Metadata({ data: "json, name=headers", elemType: shared.Header })
  headers?: Header[];

  @Metadata({ data: "json, name=i18n" })
  i18n?: I18nConfig;

  @Metadata({ data: "json, name=redirects", elemType: shared.Redirect })
  redirects?: Redirect[];

  @Metadata({ data: "json, name=rewrites", elemType: shared.Rewrite })
  rewrites?: Rewrite[];

  @Metadata({ data: "json, name=trailingSlashBehavior" })
  trailingSlashBehavior?: ServingConfigTrailingSlashBehaviorEnum;
}
