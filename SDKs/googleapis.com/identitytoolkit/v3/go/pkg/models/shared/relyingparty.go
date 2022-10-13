package shared

type Relyingparty struct {
	AndroidInstallApp     *bool   `json:"androidInstallApp"`
	AndroidMinimumVersion *string `json:"androidMinimumVersion"`
	AndroidPackageName    *string `json:"androidPackageName"`
	CanHandleCodeInApp    *bool   `json:"canHandleCodeInApp"`
	CaptchaResp           *string `json:"captchaResp"`
	Challenge             *string `json:"challenge"`
	ContinueURL           *string `json:"continueUrl"`
	Email                 *string `json:"email"`
	IOsAppStoreID         *string `json:"iOSAppStoreId"`
	IOsBundleID           *string `json:"iOSBundleId"`
	IDToken               *string `json:"idToken"`
	Kind                  *string `json:"kind"`
	NewEmail              *string `json:"newEmail"`
	RequestType           *string `json:"requestType"`
	UserIP                *string `json:"userIp"`
}
