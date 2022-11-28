import { SpeakeasyBase } from "../../../internal/utils";
import { Header } from "./header";
import { I18nConfig } from "./i18nconfig";
import { Redirect } from "./redirect";
import { Rewrite } from "./rewrite";
export declare enum ServingConfigAppAssociationEnum {
    Auto = "AUTO",
    None = "NONE"
}
export declare enum ServingConfigTrailingSlashBehaviorEnum {
    TrailingSlashBehaviorUnspecified = "TRAILING_SLASH_BEHAVIOR_UNSPECIFIED",
    Add = "ADD",
    Remove = "REMOVE"
}
/**
 * The configuration for how incoming requests to a site should be routed and processed before serving content. The URL request paths are matched against the specified URL patterns in the configuration, then Hosting applies the applicable configuration according to a specific [priority order](https://firebase.google.com/docs/hosting/full-config#hosting_priority_order).
**/
export declare class ServingConfig extends SpeakeasyBase {
    appAssociation?: ServingConfigAppAssociationEnum;
    cleanUrls?: boolean;
    headers?: Header[];
    i18n?: I18nConfig;
    redirects?: Redirect[];
    rewrites?: Rewrite[];
    trailingSlashBehavior?: ServingConfigTrailingSlashBehaviorEnum;
}
