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
var DeleteMarketingV3MarketingEventsEventsExternalEventIdArchivePathParams = /** @class */ (function (_super) {
    __extends(DeleteMarketingV3MarketingEventsEventsExternalEventIdArchivePathParams, _super);
    function DeleteMarketingV3MarketingEventsEventsExternalEventIdArchivePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" }),
        __metadata("design:type", String)
    ], DeleteMarketingV3MarketingEventsEventsExternalEventIdArchivePathParams.prototype, "externalEventId", void 0);
    return DeleteMarketingV3MarketingEventsEventsExternalEventIdArchivePathParams;
}(SpeakeasyBase));
export { DeleteMarketingV3MarketingEventsEventsExternalEventIdArchivePathParams };
var DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveQueryParams = /** @class */ (function (_super) {
    __extends(DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveQueryParams, _super);
    function DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" }),
        __metadata("design:type", String)
    ], DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveQueryParams.prototype, "externalAccountId", void 0);
    return DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveQueryParams;
}(SpeakeasyBase));
export { DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveQueryParams };
var DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurity = /** @class */ (function (_super) {
    __extends(DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurity, _super);
    function DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurity.prototype, "hapikey", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" }),
        __metadata("design:type", shared.SchemePrivateAppsLegacy)
    ], DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurity.prototype, "privateAppsLegacy", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurity.prototype, "oauth2Legacy", void 0);
    return DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurity;
}(SpeakeasyBase));
export { DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurity };
var DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveRequest = /** @class */ (function (_super) {
    __extends(DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveRequest, _super);
    function DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteMarketingV3MarketingEventsEventsExternalEventIdArchivePathParams)
    ], DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveQueryParams)
    ], DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveSecurity)
    ], DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveRequest.prototype, "security", void 0);
    return DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveRequest;
}(SpeakeasyBase));
export { DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveRequest };
var DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveResponse = /** @class */ (function (_super) {
    __extends(DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveResponse, _super);
    function DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveResponse.prototype, "statusCode", void 0);
    return DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveResponse;
}(SpeakeasyBase));
export { DeleteMarketingV3MarketingEventsEventsExternalEventIdArchiveResponse };
