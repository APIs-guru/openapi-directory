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
var PatchMarketingV3MarketingEventsEventsExternalEventIdUpdatePathParams = /** @class */ (function (_super) {
    __extends(PatchMarketingV3MarketingEventsEventsExternalEventIdUpdatePathParams, _super);
    function PatchMarketingV3MarketingEventsEventsExternalEventIdUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" }),
        __metadata("design:type", String)
    ], PatchMarketingV3MarketingEventsEventsExternalEventIdUpdatePathParams.prototype, "externalEventId", void 0);
    return PatchMarketingV3MarketingEventsEventsExternalEventIdUpdatePathParams;
}(SpeakeasyBase));
export { PatchMarketingV3MarketingEventsEventsExternalEventIdUpdatePathParams };
var PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateQueryParams = /** @class */ (function (_super) {
    __extends(PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateQueryParams, _super);
    function PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" }),
        __metadata("design:type", String)
    ], PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateQueryParams.prototype, "externalAccountId", void 0);
    return PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateQueryParams;
}(SpeakeasyBase));
export { PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateQueryParams };
var PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity = /** @class */ (function (_super) {
    __extends(PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity, _super);
    function PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity.prototype, "hapikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity.prototype, "privateAppsLegacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity.prototype, "oauth2Legacy", void 0);
    return PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity;
}(SpeakeasyBase));
export { PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity };
var PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest = /** @class */ (function (_super) {
    __extends(PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest, _super);
    function PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchMarketingV3MarketingEventsEventsExternalEventIdUpdatePathParams)
    ], PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateQueryParams)
    ], PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MarketingEventUpdateRequestParams)
    ], PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateSecurity)
    ], PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest.prototype, "security", void 0);
    return PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest;
}(SpeakeasyBase));
export { PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateRequest };
var PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateResponse = /** @class */ (function (_super) {
    __extends(PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateResponse, _super);
    function PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MarketingEventPublicDefaultResponse)
    ], PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateResponse.prototype, "marketingEventPublicDefaultResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateResponse.prototype, "statusCode", void 0);
    return PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateResponse;
}(SpeakeasyBase));
export { PatchMarketingV3MarketingEventsEventsExternalEventIdUpdateResponse };
