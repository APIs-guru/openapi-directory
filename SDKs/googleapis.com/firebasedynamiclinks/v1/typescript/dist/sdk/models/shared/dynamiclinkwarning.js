var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
export var DynamicLinkWarningWarningCodeEnum;
(function (DynamicLinkWarningWarningCodeEnum) {
    DynamicLinkWarningWarningCodeEnum["CodeUnspecified"] = "CODE_UNSPECIFIED";
    DynamicLinkWarningWarningCodeEnum["NotInProjectAndroidPackageName"] = "NOT_IN_PROJECT_ANDROID_PACKAGE_NAME";
    DynamicLinkWarningWarningCodeEnum["NotIntegerAndroidPackageMinVersion"] = "NOT_INTEGER_ANDROID_PACKAGE_MIN_VERSION";
    DynamicLinkWarningWarningCodeEnum["UnnecessaryAndroidPackageMinVersion"] = "UNNECESSARY_ANDROID_PACKAGE_MIN_VERSION";
    DynamicLinkWarningWarningCodeEnum["NotUriAndroidLink"] = "NOT_URI_ANDROID_LINK";
    DynamicLinkWarningWarningCodeEnum["UnnecessaryAndroidLink"] = "UNNECESSARY_ANDROID_LINK";
    DynamicLinkWarningWarningCodeEnum["NotUriAndroidFallbackLink"] = "NOT_URI_ANDROID_FALLBACK_LINK";
    DynamicLinkWarningWarningCodeEnum["BadUriSchemeAndroidFallbackLink"] = "BAD_URI_SCHEME_ANDROID_FALLBACK_LINK";
    DynamicLinkWarningWarningCodeEnum["NotInProjectIosBundleId"] = "NOT_IN_PROJECT_IOS_BUNDLE_ID";
    DynamicLinkWarningWarningCodeEnum["NotInProjectIpadBundleId"] = "NOT_IN_PROJECT_IPAD_BUNDLE_ID";
    DynamicLinkWarningWarningCodeEnum["UnnecessaryIosUrlScheme"] = "UNNECESSARY_IOS_URL_SCHEME";
    DynamicLinkWarningWarningCodeEnum["NotNumericIosAppStoreId"] = "NOT_NUMERIC_IOS_APP_STORE_ID";
    DynamicLinkWarningWarningCodeEnum["UnnecessaryIosAppStoreId"] = "UNNECESSARY_IOS_APP_STORE_ID";
    DynamicLinkWarningWarningCodeEnum["NotUriIosFallbackLink"] = "NOT_URI_IOS_FALLBACK_LINK";
    DynamicLinkWarningWarningCodeEnum["BadUriSchemeIosFallbackLink"] = "BAD_URI_SCHEME_IOS_FALLBACK_LINK";
    DynamicLinkWarningWarningCodeEnum["NotUriIpadFallbackLink"] = "NOT_URI_IPAD_FALLBACK_LINK";
    DynamicLinkWarningWarningCodeEnum["BadUriSchemeIpadFallbackLink"] = "BAD_URI_SCHEME_IPAD_FALLBACK_LINK";
    DynamicLinkWarningWarningCodeEnum["BadDebugParam"] = "BAD_DEBUG_PARAM";
    DynamicLinkWarningWarningCodeEnum["BadAdParam"] = "BAD_AD_PARAM";
    DynamicLinkWarningWarningCodeEnum["DeprecatedParam"] = "DEPRECATED_PARAM";
    DynamicLinkWarningWarningCodeEnum["UnrecognizedParam"] = "UNRECOGNIZED_PARAM";
    DynamicLinkWarningWarningCodeEnum["TooLongParam"] = "TOO_LONG_PARAM";
    DynamicLinkWarningWarningCodeEnum["NotUriSocialImageLink"] = "NOT_URI_SOCIAL_IMAGE_LINK";
    DynamicLinkWarningWarningCodeEnum["BadUriSchemeSocialImageLink"] = "BAD_URI_SCHEME_SOCIAL_IMAGE_LINK";
    DynamicLinkWarningWarningCodeEnum["NotUriSocialUrl"] = "NOT_URI_SOCIAL_URL";
    DynamicLinkWarningWarningCodeEnum["BadUriSchemeSocialUrl"] = "BAD_URI_SCHEME_SOCIAL_URL";
    DynamicLinkWarningWarningCodeEnum["LinkLengthTooLong"] = "LINK_LENGTH_TOO_LONG";
    DynamicLinkWarningWarningCodeEnum["LinkWithFragments"] = "LINK_WITH_FRAGMENTS";
    DynamicLinkWarningWarningCodeEnum["NotMatchingIosBundleIdAndStoreId"] = "NOT_MATCHING_IOS_BUNDLE_ID_AND_STORE_ID";
})(DynamicLinkWarningWarningCodeEnum || (DynamicLinkWarningWarningCodeEnum = {}));
// DynamicLinkWarning
/**
 * Dynamic Links warning messages.
**/
var DynamicLinkWarning = /** @class */ (function (_super) {
    __extends(DynamicLinkWarning, _super);
    function DynamicLinkWarning() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "json, name=warningCode" }),
        __metadata("design:type", String)
    ], DynamicLinkWarning.prototype, "warningCode", void 0);
    __decorate([
        Metadata({ data: "json, name=warningDocumentLink" }),
        __metadata("design:type", String)
    ], DynamicLinkWarning.prototype, "warningDocumentLink", void 0);
    __decorate([
        Metadata({ data: "json, name=warningMessage" }),
        __metadata("design:type", String)
    ], DynamicLinkWarning.prototype, "warningMessage", void 0);
    return DynamicLinkWarning;
}(SpeakeasyBase));
export { DynamicLinkWarning };
