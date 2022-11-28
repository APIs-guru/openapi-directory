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
var UpdateNetworkWirelessSsidSplashSettingsPathParams = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidSplashSettingsPathParams, _super);
    function UpdateNetworkWirelessSsidSplashSettingsPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSplashSettingsPathParams.prototype, "networkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSplashSettingsPathParams.prototype, "number", void 0);
    return UpdateNetworkWirelessSsidSplashSettingsPathParams;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidSplashSettingsPathParams };
// UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess
/**
 * Details associated with a free access plan with limits.
**/
var UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess, _super);
    function UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=durationInMinutes" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess.prototype, "durationInMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess.prototype, "enabled", void 0);
    return UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess };
// UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling
/**
 * Details associated with billing splash.
**/
var UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling, _super);
    function UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=freeAccess" }),
        __metadata("design:type", UpdateNetworkWirelessSsidSplashSettingsRequestBodyBillingFreeAccess)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling.prototype, "freeAccess", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=prepaidAccessFastLoginEnabled" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling.prototype, "prepaidAccessFastLoginEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=replyToEmailAddress" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling.prototype, "replyToEmailAddress", void 0);
    return UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling };
export var UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum;
(function (UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum) {
    UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum["Open"] = "open";
    UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum["Restricted"] = "restricted";
    UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum["Default"] = "default";
})(UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum || (UpdateNetworkWirelessSsidSplashSettingsRequestBodyControllerDisconnectionBehaviorEnum = {}));
// UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship
/**
 * Details associated with guest sponsored splash.
**/
var UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship, _super);
    function UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=durationInMinutes" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship.prototype, "durationInMinutes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guestCanRequestTimeframe" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship.prototype, "guestCanRequestTimeframe", void 0);
    return UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship };
export var UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum;
(function (UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum) {
    UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum["Focused"] = "focused";
    UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum["ClickThrough"] = "click-through";
    UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum["Strict"] = "strict";
})(UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum || (UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentStrengthEnum = {}));
// UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork
/**
 * Systems Manager network targeted for sentry enrollment.
**/
var UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork, _super);
    function UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork.prototype, "id", void 0);
    return UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork };
// UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment
/**
 * Systems Manager sentry enrollment splash settings.
**/
var UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment, _super);
    function UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enforcedSystems" }),
        __metadata("design:type", Array)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment.prototype, "enforcedSystems", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=strength" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment.prototype, "strength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=systemsManagerNetwork" }),
        __metadata("design:type", UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollmentSystemsManagerNetwork)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment.prototype, "systemsManagerNetwork", void 0);
    return UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment };
// UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage
/**
 * The image used in the splash page.
**/
var UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage, _super);
    function UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extension" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage.prototype, "extension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=md5" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage.prototype, "md5", void 0);
    return UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage };
// UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo
/**
 * The logo used in the splash page.
**/
var UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo, _super);
    function UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extension" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo.prototype, "extension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=md5" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo.prototype, "md5", void 0);
    return UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo };
// UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront
/**
 * The prepaid front image used in the splash page.
**/
var UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront, _super);
    function UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=extension" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront.prototype, "extension", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=md5" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront.prototype, "md5", void 0);
    return UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront };
var UpdateNetworkWirelessSsidSplashSettingsRequestBody = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidSplashSettingsRequestBody, _super);
    function UpdateNetworkWirelessSsidSplashSettingsRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowSimultaneousLogins" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBody.prototype, "allowSimultaneousLogins", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billing" }),
        __metadata("design:type", UpdateNetworkWirelessSsidSplashSettingsRequestBodyBilling)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBody.prototype, "billing", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=blockAllTrafficBeforeSignOn" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBody.prototype, "blockAllTrafficBeforeSignOn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=controllerDisconnectionBehavior" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBody.prototype, "controllerDisconnectionBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=guestSponsorship" }),
        __metadata("design:type", UpdateNetworkWirelessSsidSplashSettingsRequestBodyGuestSponsorship)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBody.prototype, "guestSponsorship", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=redirectUrl" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBody.prototype, "redirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sentryEnrollment" }),
        __metadata("design:type", UpdateNetworkWirelessSsidSplashSettingsRequestBodySentryEnrollment)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBody.prototype, "sentryEnrollment", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=splashImage" }),
        __metadata("design:type", UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashImage)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBody.prototype, "splashImage", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=splashLogo" }),
        __metadata("design:type", UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashLogo)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBody.prototype, "splashLogo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=splashPrepaidFront" }),
        __metadata("design:type", UpdateNetworkWirelessSsidSplashSettingsRequestBodySplashPrepaidFront)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBody.prototype, "splashPrepaidFront", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=splashTimeout" }),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBody.prototype, "splashTimeout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=splashUrl" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBody.prototype, "splashUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useRedirectUrl" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBody.prototype, "useRedirectUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=useSplashUrl" }),
        __metadata("design:type", Boolean)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBody.prototype, "useSplashUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=welcomeMessage" }),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSplashSettingsRequestBody.prototype, "welcomeMessage", void 0);
    return UpdateNetworkWirelessSsidSplashSettingsRequestBody;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidSplashSettingsRequestBody };
var UpdateNetworkWirelessSsidSplashSettingsRequest = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidSplashSettingsRequest, _super);
    function UpdateNetworkWirelessSsidSplashSettingsRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateNetworkWirelessSsidSplashSettingsPathParams)
    ], UpdateNetworkWirelessSsidSplashSettingsRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateNetworkWirelessSsidSplashSettingsRequestBody)
    ], UpdateNetworkWirelessSsidSplashSettingsRequest.prototype, "request", void 0);
    return UpdateNetworkWirelessSsidSplashSettingsRequest;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidSplashSettingsRequest };
var UpdateNetworkWirelessSsidSplashSettingsResponse = /** @class */ (function (_super) {
    __extends(UpdateNetworkWirelessSsidSplashSettingsResponse, _super);
    function UpdateNetworkWirelessSsidSplashSettingsResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateNetworkWirelessSsidSplashSettingsResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateNetworkWirelessSsidSplashSettingsResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Map)
    ], UpdateNetworkWirelessSsidSplashSettingsResponse.prototype, "updateNetworkWirelessSsidSplashSettings200ApplicationJsonObject", void 0);
    return UpdateNetworkWirelessSsidSplashSettingsResponse;
}(SpeakeasyBase));
export { UpdateNetworkWirelessSsidSplashSettingsResponse };
