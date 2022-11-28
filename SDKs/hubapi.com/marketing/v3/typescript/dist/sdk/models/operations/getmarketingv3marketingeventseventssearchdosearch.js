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
var GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams = /** @class */ (function (_super) {
    __extends(GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams, _super);
    function GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=q" }),
        __metadata("design:type", String)
    ], GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams.prototype, "q", void 0);
    return GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams;
}(SpeakeasyBase));
export { GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams };
var GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity = /** @class */ (function (_super) {
    __extends(GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity, _super);
    function GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity.prototype, "hapikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity.prototype, "oauth2Legacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity.prototype, "privateAppsLegacy", void 0);
    return GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity;
}(SpeakeasyBase));
export { GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity };
var GetMarketingV3MarketingEventsEventsSearchDoSearchRequest = /** @class */ (function (_super) {
    __extends(GetMarketingV3MarketingEventsEventsSearchDoSearchRequest, _super);
    function GetMarketingV3MarketingEventsEventsSearchDoSearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMarketingV3MarketingEventsEventsSearchDoSearchQueryParams)
    ], GetMarketingV3MarketingEventsEventsSearchDoSearchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMarketingV3MarketingEventsEventsSearchDoSearchSecurity)
    ], GetMarketingV3MarketingEventsEventsSearchDoSearchRequest.prototype, "security", void 0);
    return GetMarketingV3MarketingEventsEventsSearchDoSearchRequest;
}(SpeakeasyBase));
export { GetMarketingV3MarketingEventsEventsSearchDoSearchRequest };
var GetMarketingV3MarketingEventsEventsSearchDoSearchResponse = /** @class */ (function (_super) {
    __extends(GetMarketingV3MarketingEventsEventsSearchDoSearchResponse, _super);
    function GetMarketingV3MarketingEventsEventsSearchDoSearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetMarketingV3MarketingEventsEventsSearchDoSearchResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging)
    ], GetMarketingV3MarketingEventsEventsSearchDoSearchResponse.prototype, "collectionResponseMarketingEventExternalUniqueIdentifierNoPaging", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMarketingV3MarketingEventsEventsSearchDoSearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMarketingV3MarketingEventsEventsSearchDoSearchResponse.prototype, "statusCode", void 0);
    return GetMarketingV3MarketingEventsEventsSearchDoSearchResponse;
}(SpeakeasyBase));
export { GetMarketingV3MarketingEventsEventsSearchDoSearchResponse };
