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
var PostPortfolioHeaders = /** @class */ (function (_super) {
    __extends(PostPortfolioHeaders, _super);
    function PostPortfolioHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Token" }),
        __metadata("design:type", String)
    ], PostPortfolioHeaders.prototype, "token", void 0);
    return PostPortfolioHeaders;
}(SpeakeasyBase));
export { PostPortfolioHeaders };
var PostPortfolioRequests = /** @class */ (function (_super) {
    __extends(PostPortfolioRequests, _super);
    function PostPortfolioRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/*+json" }),
        __metadata("design:type", shared.PortfolioRequest)
    ], PostPortfolioRequests.prototype, "portfolioRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PortfolioRequest)
    ], PostPortfolioRequests.prototype, "portfolioRequest1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=text/json" }),
        __metadata("design:type", shared.PortfolioRequest)
    ], PostPortfolioRequests.prototype, "portfolioRequest2", void 0);
    return PostPortfolioRequests;
}(SpeakeasyBase));
export { PostPortfolioRequests };
var PostPortfolioRequest = /** @class */ (function (_super) {
    __extends(PostPortfolioRequest, _super);
    function PostPortfolioRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioHeaders)
    ], PostPortfolioRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostPortfolioRequests)
    ], PostPortfolioRequest.prototype, "request", void 0);
    return PostPortfolioRequest;
}(SpeakeasyBase));
export { PostPortfolioRequest };
var PostPortfolioResponse = /** @class */ (function (_super) {
    __extends(PostPortfolioResponse, _super);
    function PostPortfolioResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostPortfolioResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostPortfolioResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata({ elemType: shared.PortfolioModel }),
        __metadata("design:type", Array)
    ], PostPortfolioResponse.prototype, "portfolioModels", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostPortfolioResponse.prototype, "statusCode", void 0);
    return PostPortfolioResponse;
}(SpeakeasyBase));
export { PostPortfolioResponse };
