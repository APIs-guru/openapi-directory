package operations

type UpdateNetworkWirelessSsidSplashSettingsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	Number    string `pathParam:"style=simple,explode=false,name=number"`
}

type UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess struct {
	DurationInMinutes *int64 `json:"durationInMinutes"`
	Enabled           *bool  `json:"enabled"`
}

type UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling struct {
	FreeAccess                    *UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess `json:"freeAccess"`
	PrepaidAccessFastLoginEnabled *bool                                                                `json:"prepaidAccessFastLoginEnabled"`
	ReplyToEmailAddress           *string                                                              `json:"replyToEmailAddress"`
}

type UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum string

const (
	UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnumOpen       UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum = "open"
	UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnumRestricted UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum = "restricted"
	UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnumDefault    UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum = "default"
)

type UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship struct {
	DurationInMinutes        *int64 `json:"durationInMinutes"`
	GuestCanRequestTimeframe *bool  `json:"guestCanRequestTimeframe"`
}

type UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum string

const (
	UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnumFocused      UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum = "focused"
	UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnumClickThrough UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum = "click-through"
	UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnumStrict       UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum = "strict"
)

type UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork struct {
	ID string `json:"id"`
}

type UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment struct {
	EnforcedSystems       []string                                                                                 `json:"enforcedSystems"`
	Strength              *UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum          `json:"strength"`
	SystemsManagerNetwork *UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork `json:"systemsManagerNetwork"`
}

type UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage struct {
	Extension *string `json:"extension"`
	Md5       *string `json:"md5"`
}

type UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo struct {
	Extension *string `json:"extension"`
	Md5       *string `json:"md5"`
}

type UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront struct {
	Extension *string `json:"extension"`
	Md5       *string `json:"md5"`
}

type UpdateNetworkWirelessSsidSplashSettingsRequestBody struct {
	AllowSimultaneousLogins         *bool                                                                                  `json:"allowSimultaneousLogins"`
	Billing                         *UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling                             `json:"billing"`
	BlockAllTrafficBeforeSignOn     *bool                                                                                  `json:"blockAllTrafficBeforeSignOn"`
	ControllerDisconnectionBehavior *UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum `json:"controllerDisconnectionBehavior"`
	GuestSponsorship                *UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship                    `json:"guestSponsorship"`
	RedirectURL                     *string                                                                                `json:"redirectUrl"`
	SentryEnrollment                *UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment                    `json:"sentryEnrollment"`
	SplashImage                     *UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage                         `json:"splashImage"`
	SplashLogo                      *UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo                          `json:"splashLogo"`
	SplashPrepaidFront              *UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront                  `json:"splashPrepaidFront"`
	SplashTimeout                   *int64                                                                                 `json:"splashTimeout"`
	SplashURL                       *string                                                                                `json:"splashUrl"`
	UseRedirectURL                  *bool                                                                                  `json:"useRedirectUrl"`
	UseSplashURL                    *bool                                                                                  `json:"useSplashUrl"`
	WelcomeMessage                  *string                                                                                `json:"welcomeMessage"`
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
