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
var PostV05CareContextsOnDiscoverHeaders = /** @class */ (function (_super) {
    __extends(PostV05CareContextsOnDiscoverHeaders, _super);
    function PostV05CareContextsOnDiscoverHeaders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" }),
        __metadata("design:type", String)
    ], PostV05CareContextsOnDiscoverHeaders.prototype, "authorization", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-CM-ID" }),
        __metadata("design:type", String)
    ], PostV05CareContextsOnDiscoverHeaders.prototype, "xCmId", void 0);
    return PostV05CareContextsOnDiscoverHeaders;
}(SpeakeasyBase));
export { PostV05CareContextsOnDiscoverHeaders };
var PostV05CareContextsOnDiscoverRequests = /** @class */ (function (_super) {
    __extends(PostV05CareContextsOnDiscoverRequests, _super);
    function PostV05CareContextsOnDiscoverRequests() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/xml" }),
        __metadata("design:type", Uint8Array)
    ], PostV05CareContextsOnDiscoverRequests.prototype, "applicationXml", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.PatientDiscoveryResult)
    ], PostV05CareContextsOnDiscoverRequests.prototype, "patientDiscoveryResult", void 0);
    return PostV05CareContextsOnDiscoverRequests;
}(SpeakeasyBase));
export { PostV05CareContextsOnDiscoverRequests };
var PostV05CareContextsOnDiscoverRequest = /** @class */ (function (_super) {
    __extends(PostV05CareContextsOnDiscoverRequest, _super);
    function PostV05CareContextsOnDiscoverRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05CareContextsOnDiscoverHeaders)
    ], PostV05CareContextsOnDiscoverRequest.prototype, "headers", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostV05CareContextsOnDiscoverRequests)
    ], PostV05CareContextsOnDiscoverRequest.prototype, "request", void 0);
    return PostV05CareContextsOnDiscoverRequest;
}(SpeakeasyBase));
export { PostV05CareContextsOnDiscoverRequest };
var PostV05CareContextsOnDiscoverResponse = /** @class */ (function (_super) {
    __extends(PostV05CareContextsOnDiscoverResponse, _super);
    function PostV05CareContextsOnDiscoverResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Uint8Array)
    ], PostV05CareContextsOnDiscoverResponse.prototype, "body", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostV05CareContextsOnDiscoverResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ErrorResponse)
    ], PostV05CareContextsOnDiscoverResponse.prototype, "errorResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostV05CareContextsOnDiscoverResponse.prototype, "statusCode", void 0);
    return PostV05CareContextsOnDiscoverResponse;
}(SpeakeasyBase));
export { PostV05CareContextsOnDiscoverResponse };
