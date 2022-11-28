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
import { GoogleCloudChannelV1EduData } from "./googlecloudchannelv1edudata";
export var GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum;
(function (GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum) {
    GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum["CustomerTypeUnspecified"] = "CUSTOMER_TYPE_UNSPECIFIED";
    GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum["Domain"] = "DOMAIN";
    GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum["Team"] = "TEAM";
})(GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum || (GoogleCloudChannelV1CloudIdentityInfoCustomerTypeEnum = {}));
// GoogleCloudChannelV1CloudIdentityInfoInput
/**
 * Cloud Identity information for the Cloud Channel Customer.
**/
var GoogleCloudChannelV1CloudIdentityInfoInput = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1CloudIdentityInfoInput, _super);
    function GoogleCloudChannelV1CloudIdentityInfoInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alternateEmail" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1CloudIdentityInfoInput.prototype, "alternateEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerType" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1CloudIdentityInfoInput.prototype, "customerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eduData" }),
        __metadata("design:type", GoogleCloudChannelV1EduData)
    ], GoogleCloudChannelV1CloudIdentityInfoInput.prototype, "eduData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1CloudIdentityInfoInput.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneNumber" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1CloudIdentityInfoInput.prototype, "phoneNumber", void 0);
    return GoogleCloudChannelV1CloudIdentityInfoInput;
}(SpeakeasyBase));
export { GoogleCloudChannelV1CloudIdentityInfoInput };
// GoogleCloudChannelV1CloudIdentityInfo
/**
 * Cloud Identity information for the Cloud Channel Customer.
**/
var GoogleCloudChannelV1CloudIdentityInfo = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1CloudIdentityInfo, _super);
    function GoogleCloudChannelV1CloudIdentityInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=adminConsoleUri" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1CloudIdentityInfo.prototype, "adminConsoleUri", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=alternateEmail" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1CloudIdentityInfo.prototype, "alternateEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=customerType" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1CloudIdentityInfo.prototype, "customerType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=eduData" }),
        __metadata("design:type", GoogleCloudChannelV1EduData)
    ], GoogleCloudChannelV1CloudIdentityInfo.prototype, "eduData", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=isDomainVerified" }),
        __metadata("design:type", Boolean)
    ], GoogleCloudChannelV1CloudIdentityInfo.prototype, "isDomainVerified", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=languageCode" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1CloudIdentityInfo.prototype, "languageCode", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phoneNumber" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1CloudIdentityInfo.prototype, "phoneNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=primaryDomain" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1CloudIdentityInfo.prototype, "primaryDomain", void 0);
    return GoogleCloudChannelV1CloudIdentityInfo;
}(SpeakeasyBase));
export { GoogleCloudChannelV1CloudIdentityInfo };
