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
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
export var GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum;
(function (GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum) {
    GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum["InvalidReasonUnspecified"] = "INVALID_REASON_UNSPECIFIED";
    GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum["UnknownInvalidReason"] = "UNKNOWN_INVALID_REASON";
    GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum["Malformed"] = "MALFORMED";
    GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum["Expired"] = "EXPIRED";
    GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum["Dupe"] = "DUPE";
    GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum["Missing"] = "MISSING";
    GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum["BrowserError"] = "BROWSER_ERROR";
})(GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum || (GoogleCloudRecaptchaenterpriseV1TokenPropertiesInvalidReasonEnum = {}));
var GoogleCloudRecaptchaenterpriseV1TokenProperties = /** @class */ (function (_super) {
    __extends(GoogleCloudRecaptchaenterpriseV1TokenProperties, _super);
    function GoogleCloudRecaptchaenterpriseV1TokenProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=action" }),
        __metadata("design:type", String)
    ], GoogleCloudRecaptchaenterpriseV1TokenProperties.prototype, "action", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=androidPackageName" }),
        __metadata("design:type", String)
    ], GoogleCloudRecaptchaenterpriseV1TokenProperties.prototype, "androidPackageName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=createTime" }),
        __metadata("design:type", String)
    ], GoogleCloudRecaptchaenterpriseV1TokenProperties.prototype, "createTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hostname" }),
        __metadata("design:type", String)
    ], GoogleCloudRecaptchaenterpriseV1TokenProperties.prototype, "hostname", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=invalidReason" }),
        __metadata("design:type", String)
    ], GoogleCloudRecaptchaenterpriseV1TokenProperties.prototype, "invalidReason", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=iosBundleId" }),
        __metadata("design:type", String)
    ], GoogleCloudRecaptchaenterpriseV1TokenProperties.prototype, "iosBundleId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=valid" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudRecaptchaenterpriseV1TokenProperties.prototype, "valid", void 0);
    return GoogleCloudRecaptchaenterpriseV1TokenProperties;
}(SpeakeasyBase));
export { GoogleCloudRecaptchaenterpriseV1TokenProperties };
