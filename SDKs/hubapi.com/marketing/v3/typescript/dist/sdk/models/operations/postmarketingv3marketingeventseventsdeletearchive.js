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
var PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption1 = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption1, _super);
    function PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" }),
        __metadata("design:type", shared.SchemeHapikey)
    ], PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption1.prototype, "hapikey", void 0);
    return PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption1;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption1 };
var PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption2 = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption2, _super);
    function PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2Legacy)
    ], PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption2.prototype, "oauth2Legacy", void 0);
    return PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption2;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption2 };
var PostMarketingV3MarketingEventsEventsDeleteArchiveSecurity = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsDeleteArchiveSecurity, _super);
    function PostMarketingV3MarketingEventsEventsDeleteArchiveSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption1)
    ], PostMarketingV3MarketingEventsEventsDeleteArchiveSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsDeleteArchiveSecurityOption2)
    ], PostMarketingV3MarketingEventsEventsDeleteArchiveSecurity.prototype, "option2", void 0);
    return PostMarketingV3MarketingEventsEventsDeleteArchiveSecurity;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsDeleteArchiveSecurity };
var PostMarketingV3MarketingEventsEventsDeleteArchiveRequest = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsDeleteArchiveRequest, _super);
    function PostMarketingV3MarketingEventsEventsDeleteArchiveRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.BatchInputMarketingEventExternalUniqueIdentifier)
    ], PostMarketingV3MarketingEventsEventsDeleteArchiveRequest.prototype, "request", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", PostMarketingV3MarketingEventsEventsDeleteArchiveSecurity)
    ], PostMarketingV3MarketingEventsEventsDeleteArchiveRequest.prototype, "security", void 0);
    return PostMarketingV3MarketingEventsEventsDeleteArchiveRequest;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsDeleteArchiveRequest };
var PostMarketingV3MarketingEventsEventsDeleteArchiveResponse = /** @class */ (function (_super) {
    __extends(PostMarketingV3MarketingEventsEventsDeleteArchiveResponse, _super);
    function PostMarketingV3MarketingEventsEventsDeleteArchiveResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", Uint8Array)
    ], PostMarketingV3MarketingEventsEventsDeleteArchiveResponse.prototype, "body", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], PostMarketingV3MarketingEventsEventsDeleteArchiveResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], PostMarketingV3MarketingEventsEventsDeleteArchiveResponse.prototype, "statusCode", void 0);
    return PostMarketingV3MarketingEventsEventsDeleteArchiveResponse;
}(SpeakeasyBase));
export { PostMarketingV3MarketingEventsEventsDeleteArchiveResponse };
