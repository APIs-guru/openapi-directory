package shared

type Relyingparty struct {
	AndroidInstallApp     *bool   `json:"androidInstallApp,omitempty"`
	AndroidMinimumVersion *string `json:"androidMinimumVersion,omitempty"`
	AndroidPackageName    *string `json:"androidPackageName,omitempty"`
	CanHandleCodeInApp    *bool   `json:"canHandleCodeInApp,omitempty"`
	CaptchaResp           *string `json:"captchaResp,omitempty"`
	Challenge             *string `json:"challenge,omitempty"`
	ContinueURL           *string `json:"continueUrl,omitempty"`
	Email                 *string `json:"email,omitempty"`
	IOsAppStoreID         *string `json:"iOSAppStoreId,omitempty"`
	IOsBundleID           *string `json:"iOSBundleId,omitempty"`
	IDToken               *string `json:"idToken,omitempty"`
	Kind                  *string `json:"kind,omitempty"`
	NewEmail              *string `json:"newEmail,omitempty"`
	RequestType           *string `json:"requestType,omitempty"`
	UserIP                *string `json:"userIp,omitempty"`
}
