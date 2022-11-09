import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum DynamicLinkWarningWarningCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED"
,    NotInProjectAndroidPackageName = "NOT_IN_PROJECT_ANDROID_PACKAGE_NAME"
,    NotIntegerAndroidPackageMinVersion = "NOT_INTEGER_ANDROID_PACKAGE_MIN_VERSION"
,    UnnecessaryAndroidPackageMinVersion = "UNNECESSARY_ANDROID_PACKAGE_MIN_VERSION"
,    NotUriAndroidLink = "NOT_URI_ANDROID_LINK"
,    UnnecessaryAndroidLink = "UNNECESSARY_ANDROID_LINK"
,    NotUriAndroidFallbackLink = "NOT_URI_ANDROID_FALLBACK_LINK"
,    BadUriSchemeAndroidFallbackLink = "BAD_URI_SCHEME_ANDROID_FALLBACK_LINK"
,    NotInProjectIosBundleId = "NOT_IN_PROJECT_IOS_BUNDLE_ID"
,    NotInProjectIpadBundleId = "NOT_IN_PROJECT_IPAD_BUNDLE_ID"
,    UnnecessaryIosUrlScheme = "UNNECESSARY_IOS_URL_SCHEME"
,    NotNumericIosAppStoreId = "NOT_NUMERIC_IOS_APP_STORE_ID"
,    UnnecessaryIosAppStoreId = "UNNECESSARY_IOS_APP_STORE_ID"
,    NotUriIosFallbackLink = "NOT_URI_IOS_FALLBACK_LINK"
,    BadUriSchemeIosFallbackLink = "BAD_URI_SCHEME_IOS_FALLBACK_LINK"
,    NotUriIpadFallbackLink = "NOT_URI_IPAD_FALLBACK_LINK"
,    BadUriSchemeIpadFallbackLink = "BAD_URI_SCHEME_IPAD_FALLBACK_LINK"
,    BadDebugParam = "BAD_DEBUG_PARAM"
,    BadAdParam = "BAD_AD_PARAM"
,    DeprecatedParam = "DEPRECATED_PARAM"
,    UnrecognizedParam = "UNRECOGNIZED_PARAM"
,    TooLongParam = "TOO_LONG_PARAM"
,    NotUriSocialImageLink = "NOT_URI_SOCIAL_IMAGE_LINK"
,    BadUriSchemeSocialImageLink = "BAD_URI_SCHEME_SOCIAL_IMAGE_LINK"
,    NotUriSocialUrl = "NOT_URI_SOCIAL_URL"
,    BadUriSchemeSocialUrl = "BAD_URI_SCHEME_SOCIAL_URL"
,    LinkLengthTooLong = "LINK_LENGTH_TOO_LONG"
,    LinkWithFragments = "LINK_WITH_FRAGMENTS"
,    NotMatchingIosBundleIdAndStoreId = "NOT_MATCHING_IOS_BUNDLE_ID_AND_STORE_ID"
}


// DynamicLinkWarning
/** 
 * Dynamic Links warning messages.
**/
export class DynamicLinkWarning extends SpeakeasyBase {
  @Metadata({ data: "json, name=warningCode" })
  warningCode?: DynamicLinkWarningWarningCodeEnum;

  @Metadata({ data: "json, name=warningDocumentLink" })
  warningDocumentLink?: string;

  @Metadata({ data: "json, name=warningMessage" })
  warningMessage?: string;
}
