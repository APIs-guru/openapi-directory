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
var GetMarketingV3MarketingEventsAppIdSettingsGetAllPathParams = /** @class */ (function (_super) {
    __extends(GetMarketingV3MarketingEventsAppIdSettingsGetAllPathParams, _super);
    function GetMarketingV3MarketingEventsAppIdSettingsGetAllPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], GetMarketingV3MarketingEventsAppIdSettingsGetAllPathParams.prototype, "appId", void 0);
    return GetMarketingV3MarketingEventsAppIdSettingsGetAllPathParams;
}(SpeakeasyBase));
export { GetMarketingV3MarketingEventsAppIdSettingsGetAllPathParams };
var GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurity = /** @class */ (function (_super) {
    __extends(GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurity, _super);
    function GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurity.prototype, "hapikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurity.prototype, "developerHapikey", void 0);
    return GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurity;
}(SpeakeasyBase));
export { GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurity };
var GetMarketingV3MarketingEventsAppIdSettingsGetAllRequest = /** @class */ (function (_super) {
    __extends(GetMarketingV3MarketingEventsAppIdSettingsGetAllRequest, _super);
    function GetMarketingV3MarketingEventsAppIdSettingsGetAllRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMarketingV3MarketingEventsAppIdSettingsGetAllPathParams)
    ], GetMarketingV3MarketingEventsAppIdSettingsGetAllRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMarketingV3MarketingEventsAppIdSettingsGetAllSecurity)
    ], GetMarketingV3MarketingEventsAppIdSettingsGetAllRequest.prototype, "security", void 0);
    return GetMarketingV3MarketingEventsAppIdSettingsGetAllRequest;
}(SpeakeasyBase));
export { GetMarketingV3MarketingEventsAppIdSettingsGetAllRequest };
var GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse = /** @class */ (function (_super) {
    __extends(GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse, _super);
    function GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EventDetailSettings)
    ], GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse.prototype, "eventDetailSettings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse.prototype, "statusCode", void 0);
    return GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse;
}(SpeakeasyBase));
export { GetMarketingV3MarketingEventsAppIdSettingsGetAllResponse };
