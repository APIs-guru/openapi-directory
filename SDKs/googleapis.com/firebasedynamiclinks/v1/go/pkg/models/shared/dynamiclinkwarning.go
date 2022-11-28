package shared

type DynamicLinkWarningWarningCodeEnum string

const (
	DynamicLinkWarningWarningCodeEnumCodeUnspecified                     DynamicLinkWarningWarningCodeEnum = "CODE_UNSPECIFIED"
	DynamicLinkWarningWarningCodeEnumNotInProjectAndroidPackageName      DynamicLinkWarningWarningCodeEnum = "NOT_IN_PROJECT_ANDROID_PACKAGE_NAME"
	DynamicLinkWarningWarningCodeEnumNotIntegerAndroidPackageMinVersion  DynamicLinkWarningWarningCodeEnum = "NOT_INTEGER_ANDROID_PACKAGE_MIN_VERSION"
	DynamicLinkWarningWarningCodeEnumUnnecessaryAndroidPackageMinVersion DynamicLinkWarningWarningCodeEnum = "UNNECESSARY_ANDROID_PACKAGE_MIN_VERSION"
	DynamicLinkWarningWarningCodeEnumNotURIAndroidLink                   DynamicLinkWarningWarningCodeEnum = "NOT_URI_ANDROID_LINK"
	DynamicLinkWarningWarningCodeEnumUnnecessaryAndroidLink              DynamicLinkWarningWarningCodeEnum = "UNNECESSARY_ANDROID_LINK"
	DynamicLinkWarningWarningCodeEnumNotURIAndroidFallbackLink           DynamicLinkWarningWarningCodeEnum = "NOT_URI_ANDROID_FALLBACK_LINK"
	DynamicLinkWarningWarningCodeEnumBadURISchemeAndroidFallbackLink     DynamicLinkWarningWarningCodeEnum = "BAD_URI_SCHEME_ANDROID_FALLBACK_LINK"
	DynamicLinkWarningWarningCodeEnumNotInProjectIosBundleID             DynamicLinkWarningWarningCodeEnum = "NOT_IN_PROJECT_IOS_BUNDLE_ID"
	DynamicLinkWarningWarningCodeEnumNotInProjectIpadBundleID            DynamicLinkWarningWarningCodeEnum = "NOT_IN_PROJECT_IPAD_BUNDLE_ID"
	DynamicLinkWarningWarningCodeEnumUnnecessaryIosURLScheme             DynamicLinkWarningWarningCodeEnum = "UNNECESSARY_IOS_URL_SCHEME"
	DynamicLinkWarningWarningCodeEnumNotNumericIosAppStoreID             DynamicLinkWarningWarningCodeEnum = "NOT_NUMERIC_IOS_APP_STORE_ID"
	DynamicLinkWarningWarningCodeEnumUnnecessaryIosAppStoreID            DynamicLinkWarningWarningCodeEnum = "UNNECESSARY_IOS_APP_STORE_ID"
	DynamicLinkWarningWarningCodeEnumNotURIIosFallbackLink               DynamicLinkWarningWarningCodeEnum = "NOT_URI_IOS_FALLBACK_LINK"
	DynamicLinkWarningWarningCodeEnumBadURISchemeIosFallbackLink         DynamicLinkWarningWarningCodeEnum = "BAD_URI_SCHEME_IOS_FALLBACK_LINK"
	DynamicLinkWarningWarningCodeEnumNotURIIpadFallbackLink              DynamicLinkWarningWarningCodeEnum = "NOT_URI_IPAD_FALLBACK_LINK"
	DynamicLinkWarningWarningCodeEnumBadURISchemeIpadFallbackLink        DynamicLinkWarningWarningCodeEnum = "BAD_URI_SCHEME_IPAD_FALLBACK_LINK"
	DynamicLinkWarningWarningCodeEnumBadDebugParam                       DynamicLinkWarningWarningCodeEnum = "BAD_DEBUG_PARAM"
	DynamicLinkWarningWarningCodeEnumBadAdParam                          DynamicLinkWarningWarningCodeEnum = "BAD_AD_PARAM"
	DynamicLinkWarningWarningCodeEnumDeprecatedParam                     DynamicLinkWarningWarningCodeEnum = "DEPRECATED_PARAM"
	DynamicLinkWarningWarningCodeEnumUnrecognizedParam                   DynamicLinkWarningWarningCodeEnum = "UNRECOGNIZED_PARAM"
	DynamicLinkWarningWarningCodeEnumTooLongParam                        DynamicLinkWarningWarningCodeEnum = "TOO_LONG_PARAM"
	DynamicLinkWarningWarningCodeEnumNotURISocialImageLink               DynamicLinkWarningWarningCodeEnum = "NOT_URI_SOCIAL_IMAGE_LINK"
	DynamicLinkWarningWarningCodeEnumBadURISchemeSocialImageLink         DynamicLinkWarningWarningCodeEnum = "BAD_URI_SCHEME_SOCIAL_IMAGE_LINK"
	DynamicLinkWarningWarningCodeEnumNotURISocialURL                     DynamicLinkWarningWarningCodeEnum = "NOT_URI_SOCIAL_URL"
	DynamicLinkWarningWarningCodeEnumBadURISchemeSocialURL               DynamicLinkWarningWarningCodeEnum = "BAD_URI_SCHEME_SOCIAL_URL"
	DynamicLinkWarningWarningCodeEnumLinkLengthTooLong                   DynamicLinkWarningWarningCodeEnum = "LINK_LENGTH_TOO_LONG"
	DynamicLinkWarningWarningCodeEnumLinkWithFragments                   DynamicLinkWarningWarningCodeEnum = "LINK_WITH_FRAGMENTS"
	DynamicLinkWarningWarningCodeEnumNotMatchingIosBundleIDAndStoreID    DynamicLinkWarningWarningCodeEnum = "NOT_MATCHING_IOS_BUNDLE_ID_AND_STORE_ID"
)

// DynamicLinkWarning
// Dynamic Links warning messages.
type DynamicLinkWarning struct {
	WarningCode         *DynamicLinkWarningWarningCodeEnum `json:"warningCode,omitempty"`
	WarningDocumentLink *string                            `json:"warningDocumentLink,omitempty"`
	WarningMessage      *string                            `json:"warningMessage,omitempty"`
}
