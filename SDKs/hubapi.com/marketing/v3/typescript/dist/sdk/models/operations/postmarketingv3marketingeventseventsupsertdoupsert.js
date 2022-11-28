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
var PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity, _super);
    function PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity.prototype, "hapikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity.prototype, "privateAppsLegacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity.prototype, "oauth2Legacy", void 0);
    return PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity };
var PostMarketingV3MarketingEventsEventsUpsertDoUpsertRequest = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsUpsertDoUpsertRequest, _super);
    function PostMarketingV3MarketingEventsEventsUpsertDoUpsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchInputMarketingEventCreateRequestParams)
    ], PostMarketingV3MarketingEventsEventsUpsertDoUpsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsUpsertDoUpsertSecurity)
    ], PostMarketingV3MarketingEventsEventsUpsertDoUpsertRequest.prototype, "security", void 0);
    return PostMarketingV3MarketingEventsEventsUpsertDoUpsertRequest;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsUpsertDoUpsertRequest };
var PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse, _super);
    function PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.BatchResponseMarketingEventPublicDefaultResponse)
    ], PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse.prototype, "batchResponseMarketingEventPublicDefaultResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse.prototype, "statusCode", void 0);
    return PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsUpsertDoUpsertResponse };
