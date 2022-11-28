import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkWirelessSsidSplashSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


// UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess
/** 
 * Details associated with a free access plan with limits.
**/
export class UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=durationInMinutes" })
  durationInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


// UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling
/** 
 * Details associated with billing splash.
**/
export class UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=freeAccess" })
  freeAccess?: UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess;

  @SpeakeasyMetadata({ data: "json, name=prepaidAccessFastLoginEnabled" })
  prepaidAccessFastLoginEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=replyToEmailAddress" })
  replyToEmailAddress?: string;
}

export enum UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum {
    Open = "open",
    Restricted = "restricted",
    Default = "default"
}


// UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship
/** 
 * Details associated with guest sponsored splash.
**/
export class UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=durationInMinutes" })
  durationInMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=guestCanRequestTimeframe" })
  guestCanRequestTimeframe?: boolean;
}

export enum UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum {
    Focused = "focused",
    ClickThrough = "click-through",
    Strict = "strict"
}


// UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork
/** 
 * Systems Manager network targeted for sentry enrollment.
**/
export class UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


// UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment
/** 
 * Systems Manager sentry enrollment splash settings.
**/
export class UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enforcedSystems" })
  enforcedSystems?: string[];

  @SpeakeasyMetadata({ data: "json, name=strength" })
  strength?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum;

  @SpeakeasyMetadata({ data: "json, name=systemsManagerNetwork" })
  systemsManagerNetwork?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork;
}


// UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage
/** 
 * The image used in the splash page.
**/
export class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension?: string;

  @SpeakeasyMetadata({ data: "json, name=md5" })
  md5?: string;
}


// UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo
/** 
 * The logo used in the splash page.
**/
export class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension?: string;

  @SpeakeasyMetadata({ data: "json, name=md5" })
  md5?: string;
}


// UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront
/** 
 * The prepaid front image used in the splash page.
**/
export class UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension" })
  extension?: string;

  @SpeakeasyMetadata({ data: "json, name=md5" })
  md5?: string;
}


export class UpdateNetworkWirelessSsidSplashSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowSimultaneousLogins" })
  allowSimultaneousLogins?: boolean;

  @SpeakeasyMetadata({ data: "json, name=billing" })
  billing?: UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling;

  @SpeakeasyMetadata({ data: "json, name=blockAllTrafficBeforeSignOn" })
  blockAllTrafficBeforeSignOn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=controllerDisconnectionBehavior" })
  controllerDisconnectionBehavior?: UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum;

  @SpeakeasyMetadata({ data: "json, name=guestSponsorship" })
  guestSponsorship?: UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship;

  @SpeakeasyMetadata({ data: "json, name=redirectUrl" })
  redirectUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sentryEnrollment" })
  sentryEnrollment?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment;

  @SpeakeasyMetadata({ data: "json, name=splashImage" })
  splashImage?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage;

  @SpeakeasyMetadata({ data: "json, name=splashLogo" })
  splashLogo?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo;

  @SpeakeasyMetadata({ data: "json, name=splashPrepaidFront" })
  splashPrepaidFront?: UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront;

  @SpeakeasyMetadata({ data: "json, name=splashTimeout" })
  splashTimeout?: number;

  @SpeakeasyMetadata({ data: "json, name=splashUrl" })
  splashUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=useRedirectUrl" })
  useRedirectUrl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=useSplashUrl" })
  useSplashUrl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=welcomeMessage" })
  welcomeMessage?: string;
}


export class UpdateNetworkWirelessSsidSplashSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkWirelessSsidSplashSettingsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidSplashSettingsRequestBody;
}


export class UpdateNetworkWirelessSsidSplashSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkWirelessSsidSplashSettings200ApplicationJsonObject?: Map<string, any>;
}
