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
var PutMarketingV3MarketingEventsEventsExternalEventIdReplacePathParams = /** @class */ (function (_super) {
    __extends(PutMarketingV3MarketingEventsEventsExternalEventIdReplacePathParams, _super);
    function PutMarketingV3MarketingEventsEventsExternalEventIdReplacePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" }),
        __metadata("design:type", String)
    ], PutMarketingV3MarketingEventsEventsExternalEventIdReplacePathParams.prototype, "externalEventId", void 0);
    return PutMarketingV3MarketingEventsEventsExternalEventIdReplacePathParams;
}(SpeakeasyBase));
export { PutMarketingV3MarketingEventsEventsExternalEventIdReplacePathParams };
var PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity = /** @class */ (function (_super) {
    __extends(PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity, _super);
    function PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity.prototype, "hapikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity.prototype, "privateAppsLegacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity.prototype, "oauth2Legacy", void 0);
    return PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity;
}(SpeakeasyBase));
export { PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity };
var PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest = /** @class */ (function (_super) {
    __extends(PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest, _super);
    function PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutMarketingV3MarketingEventsEventsExternalEventIdReplacePathParams)
    ], PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.MarketingEventCreateRequestParams)
    ], PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PutMarketingV3MarketingEventsEventsExternalEventIdReplaceSecurity)
    ], PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest.prototype, "security", void 0);
    return PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest;
}(SpeakeasyBase));
export { PutMarketingV3MarketingEventsEventsExternalEventIdReplaceRequest };
var PutMarketingV3MarketingEventsEventsExternalEventIdReplaceResponse = /** @class */ (function (_super) {
    __extends(PutMarketingV3MarketingEventsEventsExternalEventIdReplaceResponse, _super);
    function PutMarketingV3MarketingEventsEventsExternalEventIdReplaceResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PutMarketingV3MarketingEventsEventsExternalEventIdReplaceResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PutMarketingV3MarketingEventsEventsExternalEventIdReplaceResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.MarketingEventPublicDefaultResponse)
    ], PutMarketingV3MarketingEventsEventsExternalEventIdReplaceResponse.prototype, "marketingEventPublicDefaultResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PutMarketingV3MarketingEventsEventsExternalEventIdReplaceResponse.prototype, "statusCode", void 0);
    return PutMarketingV3MarketingEventsEventsExternalEventIdReplaceResponse;
}(SpeakeasyBase));
export { PutMarketingV3MarketingEventsEventsExternalEventIdReplaceResponse };
