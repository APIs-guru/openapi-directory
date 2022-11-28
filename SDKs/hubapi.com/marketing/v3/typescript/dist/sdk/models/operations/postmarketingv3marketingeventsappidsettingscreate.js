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
var PostMarketingV3MarketingEventsAppIdSettingsCreatePathParams = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsAppIdSettingsCreatePathParams, _super);
    function PostMarketingV3MarketingEventsAppIdSettingsCreatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=appId" }),
        __metadata("design:type", Number)
    ], PostMarketingV3MarketingEventsAppIdSettingsCreatePathParams.prototype, "appId", void 0);
    return PostMarketingV3MarketingEventsAppIdSettingsCreatePathParams;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsAppIdSettingsCreatePathParams };
var PostMarketingV3MarketingEventsAppIdSettingsCreateSecurity = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsAppIdSettingsCreateSecurity, _super);
    function PostMarketingV3MarketingEventsAppIdSettingsCreateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], PostMarketingV3MarketingEventsAppIdSettingsCreateSecurity.prototype, "hapikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeDeveloperHapikey)
    ], PostMarketingV3MarketingEventsAppIdSettingsCreateSecurity.prototype, "developerHapikey", void 0);
    return PostMarketingV3MarketingEventsAppIdSettingsCreateSecurity;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsAppIdSettingsCreateSecurity };
var PostMarketingV3MarketingEventsAppIdSettingsCreateRequest = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsAppIdSettingsCreateRequest, _super);
    function PostMarketingV3MarketingEventsAppIdSettingsCreateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsAppIdSettingsCreatePathParams)
    ], PostMarketingV3MarketingEventsAppIdSettingsCreateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.EventDetailSettingsUrl)
    ], PostMarketingV3MarketingEventsAppIdSettingsCreateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsAppIdSettingsCreateSecurity)
    ], PostMarketingV3MarketingEventsAppIdSettingsCreateRequest.prototype, "security", void 0);
    return PostMarketingV3MarketingEventsAppIdSettingsCreateRequest;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsAppIdSettingsCreateRequest };
var PostMarketingV3MarketingEventsAppIdSettingsCreateResponse = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsAppIdSettingsCreateResponse, _super);
    function PostMarketingV3MarketingEventsAppIdSettingsCreateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostMarketingV3MarketingEventsAppIdSettingsCreateResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsAppIdSettingsCreateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EventDetailSettings)
    ], PostMarketingV3MarketingEventsAppIdSettingsCreateResponse.prototype, "eventDetailSettings", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostMarketingV3MarketingEventsAppIdSettingsCreateResponse.prototype, "statusCode", void 0);
    return PostMarketingV3MarketingEventsAppIdSettingsCreateResponse;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsAppIdSettingsCreateResponse };
