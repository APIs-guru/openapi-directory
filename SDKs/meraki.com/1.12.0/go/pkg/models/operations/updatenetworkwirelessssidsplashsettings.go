package operations

type UpdateNetworkWirelessSsidSplashSettingsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	Number    string `pathParam:"style=simple,explode=false,name=number"`
}

// UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess
// Details associated with a free access plan with limits.
type UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess struct {
	DurationInMinutes *int64 `json:"durationInMinutes,omitempty"`
	Enabled           *bool  `json:"enabled,omitempty"`
}

// UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling
// Details associated with billing splash.
type UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling struct {
	FreeAccess                    *UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess `json:"freeAccess,omitempty"`
	PrepaidAccessFastLoginEnabled *bool                                                                `json:"prepaidAccessFastLoginEnabled,omitempty"`
	ReplyToEmailAddress           *string                                                              `json:"replyToEmailAddress,omitempty"`
}

type UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum string

const (
	UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnumOpen       UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum = "open"
	UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnumRestricted UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum = "restricted"
	UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnumDefault    UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum = "default"
)

// UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship
// Details associated with guest sponsored splash.
type UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship struct {
	DurationInMinutes        *int64 `json:"durationInMinutes,omitempty"`
	GuestCanRequestTimeframe *bool  `json:"guestCanRequestTimeframe,omitempty"`
}

type UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum string

const (
	UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnumFocused      UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum = "focused"
	UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnumClickThrough UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum = "click-through"
	UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnumStrict       UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum = "strict"
)

// UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork
// Systems Manager network targeted for sentry enrollment.
type UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork struct {
	ID string `json:"id"`
}

// UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment
// Systems Manager sentry enrollment splash settings.
type UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment struct {
	EnforcedSystems       []string                                                                                 `json:"enforcedSystems,omitempty"`
	Strength              *UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum          `json:"strength,omitempty"`
	SystemsManagerNetwork *UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork `json:"systemsManagerNetwork,omitempty"`
}

// UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage
// The image used in the splash page.
type UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage struct {
	Extension *string `json:"extension,omitempty"`
	Md5       *string `json:"md5,omitempty"`
}

// UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo
// The logo used in the splash page.
type UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo struct {
	Extension *string `json:"extension,omitempty"`
	Md5       *string `json:"md5,omitempty"`
}

// UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront
// The prepaid front image used in the splash page.
type UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront struct {
	Extension *string `json:"extension,omitempty"`
	Md5       *string `json:"md5,omitempty"`
}

type UpdateNetworkWirelessSsidSplashSettingsRequestBody struct {
	AllowSimultaneousLogins         *bool                                                                                  `json:"allowSimultaneousLogins,omitempty"`
	Billing                         *UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling                             `json:"billing,omitempty"`
	BlockAllTrafficBeforeSignOn     *bool                                                                                  `json:"blockAllTrafficBeforeSignOn,omitempty"`
	ControllerDisconnectionBehavior *UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum `json:"controllerDisconnectionBehavior,omitempty"`
	GuestSponsorship                *UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship                    `json:"guestSponsorship,omitempty"`
	RedirectURL                     *string                                                                                `json:"redirectUrl,omitempty"`
	SentryEnrollment                *UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment                    `json:"sentryEnrollment,omitempty"`
	SplashImage                     *UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage                         `json:"splashImage,omitempty"`
	SplashLogo                      *UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo                          `json:"splashLogo,omitempty"`
	SplashPrepaidFront              *UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront                  `json:"splashPrepaidFront,omitempty"`
	SplashTimeout                   *int64                                                                                 `json:"splashTimeout,omitempty"`
	SplashURL                       *string                                                                                `json:"splashUrl,omitempty"`
	UseRedirectURL                  *bool                                                                                  `json:"useRedirectUrl,omitempty"`
	UseSplashURL                    *bool                                                                                  `json:"useSplashUrl,omitempty"`
	WelcomeMessage                  *string                                                                                `json:"welcomeMessage,omitempty"`
}

type UpdateNetworkWirelessSsidSplashSettingsRequest struct {
	PathParams UpdateNetworkWirelessSsidSplashSettingsPathParams
	Request    *UpdateNetworkWirelessSsidSplashSettingsRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkWirelessSsidSplashSettingsResponse struct {
	ContentType                                                     string
	StatusCode                                                      int64
	UpdateNetworkWirelessSsidSplashSettings200ApplicationJSONObject map[string]interface{}
}
