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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=externalEventId" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams.prototype, "externalEventId", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams };
var PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=externalAccountId" }),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams.prototype, "externalAccountId", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams };
var PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurityOption1, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurityOption1.prototype, "hapikey", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurityOption1;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurityOption1 };
var PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurityOption2, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurityOption2.prototype, "oauth2Legacy", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurityOption2;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurityOption2 };
var PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurityOption1)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurityOption2)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity.prototype, "option2", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity };
var PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelPathParams)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelQueryParams)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelSecurity)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest.prototype, "security", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelRequest };
var PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse, _super);
    function PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", shared.MarketingEventDefaultResponse)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse.prototype, "marketingEventDefaultResponse", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse.prototype, "statusCode", void 0);
    return PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsExternalEventIdCancelDoCancelResponse };
