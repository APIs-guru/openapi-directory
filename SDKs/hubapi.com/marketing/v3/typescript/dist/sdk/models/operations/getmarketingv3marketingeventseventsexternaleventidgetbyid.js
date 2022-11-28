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
var GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdPathParams = /** @class */ (function (_super) {
    __extends(GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdPathParams, _super);
    function GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" }),
        __metadata("design:type", String)
    ], GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdPathParams.prototype, "externalEventId", void 0);
    return GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdPathParams;
}(SpeakeasyBase));
export { GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdPathParams };
var GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdQueryParams = /** @class */ (function (_super) {
    __extends(GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdQueryParams, _super);
    function GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" }),
        __metadata("design:type", String)
    ], GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdQueryParams.prototype, "externalAccountId", void 0);
    return GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdQueryParams;
}(SpeakeasyBase));
export { GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdQueryParams };
var GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurity = /** @class */ (function (_super) {
    __extends(GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurity, _super);
    function GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurity.prototype, "hapikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurity.prototype, "oauth2Legacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurity.prototype, "privateAppsLegacy", void 0);
    return GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurity;
}(SpeakeasyBase));
export { GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurity };
var GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdRequest = /** @class */ (function (_super) {
    __extends(GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdRequest, _super);
    function GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdPathParams)
    ], GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdQueryParams)
    ], GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdSecurity)
    ], GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdRequest.prototype, "security", void 0);
    return GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdRequest;
}(SpeakeasyBase));
export { GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdRequest };
var GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdResponse = /** @class */ (function (_super) {
    __extends(GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdResponse, _super);
    function GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MarketingEventPublicReadResponse)
    ], GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdResponse.prototype, "marketingEventPublicReadResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdResponse.prototype, "statusCode", void 0);
    return GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdResponse;
}(SpeakeasyBase));
export { GetMarketingV3MarketingEventsEventsExternalEventIdGetByIdResponse };
