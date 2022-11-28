import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkWirelessSsidSplashSettingsPathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
/**
 * Details associated with a free access plan with limits.
**/
export declare class UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess extends SpeakeasyBase {
    durationInMinutes?: number;
    enabled?: boolean;
}
/**
 * Details associated with billing splash.
**/
export declare class UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling extends SpeakeasyBase {
    freeAccess?: UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess;
    prepaidAccessFastLoginEnabled?: boolean;
    replyToEmailAddress?: string;
}
export declare enum UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum {
    Open = "open",
    Restricted = "restricted",
    Default = "default"
}
/**
 * Details associated with guest sponsored splash.
**/
export declare class UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship extends SpeakeasyBase {
    durationInMinutes?: number;
    guestCanRequestTimeframe?: boolean;
}
export declare enum UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum {
    Focused = "focused",
    ClickThrough = "click-through",
    Strict = "strict"
}
/**
 * Systems Manager network targeted for sentry enrollment.
**/
export declare class UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork extends SpeakeasyBase {
    id: string;
}
/**
 * Systems Manager sentry enrollment splash settings.
**/
export declare class UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment extends SpeakeasyBase {
    enforcedSystems?: string[];
    strength?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum;
    systemsManagerNetwork?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork;
}
/**
 * The image used in the splash page.
**/
export declare class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage extends SpeakeasyBase {
    extension?: string;
    md5?: string;
}
/**
 * The logo used in the splash page.
**/
export declare class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo extends SpeakeasyBase {
    extension?: string;
    md5?: string;
}
/**
 * The prepaid front image used in the splash page.
**/
export declare class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront extends SpeakeasyBase {
    extension?: string;
    md5?: string;
}
export declare class UpdateNetworkWirelessSsidSplashSettingsRequestBody extends SpeakeasyBase {
    allowSimultaneousLogins?: boolean;
    billing?: UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling;
    blockAllTrafficBeforeSignOn?: boolean;
    controllerDisconnectionBehavior?: UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum;
    guestSponsorship?: UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship;
    redirectUrl?: string;
    sentryEnrollment?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment;
    splashImage?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage;
    splashLogo?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo;
    splashPrepaidFront?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront;
    splashTimeout?: number;
    splashUrl?: string;
    useRedirectUrl?: boolean;
    useSplashUrl?: boolean;
    welcomeMessage?: string;
}
export declare class UpdateNetworkWirelessSsidSplashSettingsRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkWirelessSsidSplashSettingsPathParams;
    request?: UpdateNetworkWirelessSsidSplashSettingsRequestBody;
}
export declare class UpdateNetworkWirelessSsidSplashSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkWirelessSsidSplashSettings200ApplicationJsonObject?: Map<string, any>;
}
