import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * Custom content configuration for access denied page. IAP allows customers to define a custom URI to use as the error page when access is denied to users. If IAP prevents access to this page, the default IAP error page will be displayed instead.
**/
export declare class AccessDeniedPageSettings extends SpeakeasyBase {
    accessDeniedPageUri?: string;
    generateTroubleshootingUri?: boolean;
    remediationTokenGenerationEnabled?: boolean;
}
