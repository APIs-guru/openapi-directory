import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkWirelessSsidSplashSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


// UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess
/** 
 * Details associated with a free access plan with limits.
**/
export class UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess extends SpeakeasyBase {
  @Metadata({ data: "json, name=durationInMinutes" })
  durationInMinutes?: number;

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


// UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling
/** 
 * Details associated with billing splash.
**/
export class UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling extends SpeakeasyBase {
  @Metadata({ data: "json, name=freeAccess" })
  freeAccess?: UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess;

  @Metadata({ data: "json, name=prepaidAccessFastLoginEnabled" })
  prepaidAccessFastLoginEnabled?: boolean;

  @Metadata({ data: "json, name=replyToEmailAddress" })
  replyToEmailAddress?: string;
}

export enum UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum {
    Open = "open"
,    Restricted = "restricted"
,    Default = "default"
}


// UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship
/** 
 * Details associated with guest sponsored splash.
**/
export class UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship extends SpeakeasyBase {
  @Metadata({ data: "json, name=durationInMinutes" })
  durationInMinutes?: number;

  @Metadata({ data: "json, name=guestCanRequestTimeframe" })
  guestCanRequestTimeframe?: boolean;
}

export enum UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum {
    Focused = "focused"
,    ClickThrough = "click-through"
,    Strict = "strict"
}


// UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork
/** 
 * Systems Manager network targeted for sentry enrollment.
**/
export class UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: string;
}


// UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment
/** 
 * Systems Manager sentry enrollment splash settings.
**/
export class UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment extends SpeakeasyBase {
  @Metadata({ data: "json, name=enforcedSystems" })
  enforcedSystems?: string[];

  @Metadata({ data: "json, name=strength" })
  strength?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum;

  @Metadata({ data: "json, name=systemsManagerNetwork" })
  systemsManagerNetwork?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork;
}


// UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage
/** 
 * The image used in the splash page.
**/
export class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage extends SpeakeasyBase {
  @Metadata({ data: "json, name=extension" })
  extension?: string;

  @Metadata({ data: "json, name=md5" })
  md5?: string;
}


// UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo
/** 
 * The logo used in the splash page.
**/
export class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo extends SpeakeasyBase {
  @Metadata({ data: "json, name=extension" })
  extension?: string;

  @Metadata({ data: "json, name=md5" })
  md5?: string;
}


// UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront
/** 
 * The prepaid front image used in the splash page.
**/
export class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront extends SpeakeasyBase {
  @Metadata({ data: "json, name=extension" })
  extension?: string;

  @Metadata({ data: "json, name=md5" })
  md5?: string;
}


export class UpdateNetworkWirelessSsidSplashSettingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowSimultaneousLogins" })
  allowSimultaneousLogins?: boolean;

  @Metadata({ data: "json, name=billing" })
  billing?: UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling;

  @Metadata({ data: "json, name=blockAllTrafficBeforeSignOn" })
  blockAllTrafficBeforeSignOn?: boolean;

  @Metadata({ data: "json, name=controllerDisconnectionBehavior" })
  controllerDisconnectionBehavior?: UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum;

  @Metadata({ data: "json, name=guestSponsorship" })
  guestSponsorship?: UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship;

  @Metadata({ data: "json, name=redirectUrl" })
  redirectUrl?: string;

  @Metadata({ data: "json, name=sentryEnrollment" })
  sentryEnrollment?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment;

  @Metadata({ data: "json, name=splashImage" })
  splashImage?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage;

  @Metadata({ data: "json, name=splashLogo" })
  splashLogo?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo;

  @Metadata({ data: "json, name=splashPrepaidFront" })
  splashPrepaidFront?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront;

  @Metadata({ data: "json, name=splashTimeout" })
  splashTimeout?: number;

  @Metadata({ data: "json, name=splashUrl" })
  splashUrl?: string;

  @Metadata({ data: "json, name=useRedirectUrl" })
  useRedirectUrl?: boolean;

  @Metadata({ data: "json, name=useSplashUrl" })
  useSplashUrl?: boolean;

  @Metadata({ data: "json, name=welcomeMessage" })
  welcomeMessage?: string;
}


export class UpdateNetworkWirelessSsidSplashSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkWirelessSsidSplashSettingsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidSplashSettingsRequestBody;
}


export class UpdateNetworkWirelessSsidSplashSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkWirelessSsidSplashSettings200ApplicationJsonObject?: Map<string, any>;
}
