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
import * as shared from "../shared";
var GetAllChannelFeaturesSecurity = /** @class */ (function (_super) {
    __extends(GetAllChannelFeaturesSecurity, _super);
    function GetAllChannelFeaturesSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemeCustomAuthentication)
    ], GetAllChannelFeaturesSecurity.prototype, "customAuthentication", void 0);
    return GetAllChannelFeaturesSecurity;
}(SpeakeasyBase));
export { GetAllChannelFeaturesSecurity };
var GetAllChannelFeaturesRequest = /** @class */ (function (_super) {
    __extends(GetAllChannelFeaturesRequest, _super);
    function GetAllChannelFeaturesRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetAllChannelFeaturesSecurity)
    ], GetAllChannelFeaturesRequest.prototype, "security", void 0);
    return GetAllChannelFeaturesRequest;
}(SpeakeasyBase));
export { GetAllChannelFeaturesRequest };
var GetAllChannelFeaturesResponse = /** @class */ (function (_super) {
    __extends(GetAllChannelFeaturesResponse, _super);
    function GetAllChannelFeaturesResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ elemType: shared.ChannelFeatures }),
        __metadata("design:type", Array)
    ], GetAllChannelFeaturesResponse.prototype, "channelFeatures", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetAllChannelFeaturesResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetAllChannelFeaturesResponse.prototype, "statusCode", void 0);
    return GetAllChannelFeaturesResponse;
}(SpeakeasyBase));
export { GetAllChannelFeaturesResponse };
