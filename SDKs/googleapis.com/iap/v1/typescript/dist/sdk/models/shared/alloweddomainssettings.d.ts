import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configuration for IAP allowed domains. Lets you to restrict access to an app and allow access to only the domains that you list.
**/
export declare class AllowedDomainsSettings extends SpeakeasyBase {
    domains?: string[];
    enable?: boolean;
}
