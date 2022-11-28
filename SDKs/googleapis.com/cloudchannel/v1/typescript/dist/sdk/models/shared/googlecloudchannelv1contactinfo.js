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
// GoogleCloudChannelV1ContactInfo
/**
 * Contact information for a customer account.
**/
var GoogleCloudChannelV1ContactInfo = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1ContactInfo, _super);
    function GoogleCloudChannelV1ContactInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=displayName" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ContactInfo.prototype, "displayName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ContactInfo.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ContactInfo.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ContactInfo.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ContactInfo.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ContactInfo.prototype, "title", void 0);
    return GoogleCloudChannelV1ContactInfo;
}(SpeakeasyBase));
export { GoogleCloudChannelV1ContactInfo };
// GoogleCloudChannelV1ContactInfoInput
/**
 * Contact information for a customer account.
**/
var GoogleCloudChannelV1ContactInfoInput = /** @class */ (function (_super) {
    __extends(GoogleCloudChannelV1ContactInfoInput, _super);
    function GoogleCloudChannelV1ContactInfoInput() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ContactInfoInput.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=firstName" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ContactInfoInput.prototype, "firstName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lastName" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ContactInfoInput.prototype, "lastName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ContactInfoInput.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=title" }),
        __metadata("design:type", String)
    ], GoogleCloudChannelV1ContactInfoInput.prototype, "title", void 0);
    return GoogleCloudChannelV1ContactInfoInput;
}(SpeakeasyBase));
export { GoogleCloudChannelV1ContactInfoInput };
